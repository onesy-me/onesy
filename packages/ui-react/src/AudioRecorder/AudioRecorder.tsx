import React from 'react';
import audioFix from 'webm-duration-fix';

import { getLeadingZerosNumber, is, isEnvironment, wait } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';
import { OnesyDate, duration } from '@onesy/date';

import IconMaterialMic from '@onesy/icons-material-rounded-react/IconMaterialMicW100';
import IconMaterialSend from '@onesy/icons-material-rounded-react/IconMaterialSendW100';
import IconMaterialPlayArrow from '@onesy/icons-material-rounded-react/IconMaterialPlayArrowW100';
import IconMaterialPause from '@onesy/icons-material-rounded-react/IconMaterialPauseW100';
import IconMaterialStop from '@onesy/icons-material-rounded-react/IconMaterialStopW100';

import LineElement from '../Line';
import FadeElement from '../Fade';
import TypeElement from '../Type';
import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  '@keyframes pulse': {
    '0%': {
      opacity: 1
    },
    '50%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },

  root: {
    width: 'auto',
    whiteSpace: 'nowrap'
  },

  recordDot: {
    borderRadius: theme.methods.shape.radius.value(40, 'px'),
    background: theme.palette.color.error.main,
    animation: `$pulse 1700ms ${theme.transitions.timing_function.emphasized} 240ms infinite`
  },

  recordDot_size_small: {
    width: 8,
    height: 8,
  },

  recordDot_size_regular: {
    width: 10,
    height: 10,
  },

  recordDot_size_large: {
    width: 12,
    height: 12,
  },

  time: {
    '&.onesy-Type-root': {
      whiteSpace: 'nowrap'
    }
  }
}), { name: 'onesy-AudioRecorder' });

export type IAudioRecorder = ILine & {
  pause?: boolean;

  renderMain?: (props: { onStart: () => any; supported: boolean; }) => any;
  renderTime?: (value: string) => any;

  loading?: any;

  Icon?: IElementReference;
  IconConfirm?: IElementReference;
  IconStart?: IElementReference;
  IconPause?: IElementReference;
  IconStop?: IElementReference;

  onConfirm?: (value: Blob, meta: { duration: number; }) => any;
  onData?: (value: Blob) => any;
  onStart?: (event: React.MouseEvent<any>) => any;
  onPause?: (event: React.MouseEvent<any>) => any;
  onResume?: (event: React.MouseEvent<any>) => any;
  onStop?: (event: React.MouseEvent<any>) => any;
  onError?: (error: Error) => any;

  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  IconProps?: IPropsAny;
};

const AudioRecorder: React.FC<IAudioRecorder> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const l = theme.l;

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyAudioRecorder?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    size = 'regular',

    pause = true,

    renderMain,
    renderTime,

    loading,
    disabled,

    Component,

    Icon: Icon_ = IconMaterialMic,
    IconConfirm = IconMaterialSend,
    IconStart = IconMaterialPlayArrow,
    IconPause = IconMaterialPause,
    IconStop = IconMaterialStop,

    onConfirm: onConfirm_,
    onData,
    onStart: onStart_,
    onPause: onPause_,
    onResume: onResume_,
    onStop: onStop_,
    onError,

    TooltipProps,
    IconButtonProps,
    IconProps,

    className,

    ...other
  } = props;

  const [status, setStatus] = React.useState('initial');
  const [value, setValue] = React.useState<number>(0);

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(null),
    mediaRecorder: React.useRef<MediaRecorder>(null),
    mediaRecorderBytes: React.useRef<any>([]),
    startedAt: React.useRef<number>(0),
    valuePaused: React.useRef<any>(0),
    value: React.useRef<any>(null),
    animationFrame: React.useRef<any>(null),
    onData: React.useRef<any>(null),
    previousAction: React.useRef('start'),
    // fallback to duration calculation on desktop
    // ie. for mobile where we can't easily determine duration
    duration: React.useRef<number>(0)
  };

  refs.onData.current = onData;

  const supported = isEnvironment('browser') && window.navigator.mediaDevices?.getUserMedia; refs.value.current = value;

  const clear = () => {
    cancelAnimationFrame(refs.animationFrame.current);
  };

  React.useEffect(() => {
    return () => {
      // Clean up
      clear();
    };
  }, []);

  const update = () => {
    setValue(refs.valuePaused.current + (OnesyDate.milliseconds - refs.startedAt.current));

    refs.animationFrame.current = requestAnimationFrame(update);
  };

  const onStart = React.useCallback(async (event: React.MouseEvent<any>) => {
    // MediaStream
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // media recorder
      refs.mediaRecorder.current = new MediaRecorder(stream);

      // reset
      refs.mediaRecorderBytes.current = [];

      // data
      refs.mediaRecorder.current.addEventListener('dataavailable', event_ => {
        const data = event_.data;

        refs.mediaRecorderBytes.current.push(data);

        if (is('function', refs.onData.current)) refs.onData.current(data);
      });

      // stop
      refs.mediaRecorder.current.addEventListener('stop', event_ => {
        const tracks = stream.getTracks();

        tracks.forEach(track => track.stop());
      });

      // start
      refs.mediaRecorder.current.start();
    }
    catch (error) {
      if (is('function', onError)) onError(error);

      return;
    }

    // reset duration
    refs.duration.current = 0;

    // started at milliseconds
    refs.startedAt.current = OnesyDate.milliseconds;

    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    setStatus('running');

    if (is('function', onStart_)) onStart_(event);

    // previous action
    refs.previousAction.current = 'start';
  }, [onStart_, onError]);

  const onPause = React.useCallback((event: React.MouseEvent<any>) => {
    // media recorder
    if (refs.mediaRecorder.current) refs.mediaRecorder.current.pause();

    // add so far to duration
    refs.duration.current += OnesyDate.milliseconds - refs.startedAt.current;

    clear();

    // Remember previous value
    refs.valuePaused.current = refs.value.current;

    setStatus('paused');

    if (is('function', onPause_)) onPause_(event);

    // previous action
    refs.previousAction.current = 'pause';
  }, [onPause_]);

  const onStop = React.useCallback((event: React.MouseEvent<any>) => {
    // media recorder
    if (refs.mediaRecorder.current) refs.mediaRecorder.current.stop();

    clear();

    setStatus('initial');

    setValue(0);

    refs.valuePaused.current = 0;

    refs.value.current = 0;

    if (is('function', onStop_)) onStop_(event);
  }, [onStop_]);

  const onConfirm = React.useCallback(async (event: React.MouseEvent<any>) => {
    // Stop
    onStop(event);

    // duration
    if (refs.previousAction.current === 'resume') {
      // add so far to duration
      refs.duration.current += OnesyDate.milliseconds - refs.startedAt.current;
    }

    const meta = {
      // duration in seconds
      duration: refs.duration.current / 1e3
    };

    await wait(40);

    // Get the blob
    const mimeType = refs.mediaRecorder.current?.mimeType;

    let blob = new Blob(refs.mediaRecorderBytes.current, { type: mimeType });

    try {
      blob = await audioFix(blob);
    }
    catch (error) {
      console.log('AudioRecorder onConfirm error', error);
    }

    // clean up
    refs.mediaRecorderBytes.current = [];

    if (is('function', onConfirm_)) onConfirm_(blob, meta);
  }, [onStop, onConfirm_]);

  const onResume = React.useCallback((event: React.MouseEvent<any>) => {
    // media recorder
    if (refs.mediaRecorder.current) refs.mediaRecorder.current.resume();

    // record at milliseconds
    refs.startedAt.current = OnesyDate.milliseconds;

    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    setStatus('running');

    if (is('function', onResume_)) onResume_(event);

    // previous action
    refs.previousAction.current = 'resume';
  }, [onResume_]);

  const valueFormat = (valueNew_: number) => {
    let valueNew = '';

    const valueDuration: any = duration(valueNew_, undefined, true, undefined, ['hour', 'minute', 'second', 'millisecond']);

    if (valueDuration.hour > 0) valueNew += `${getLeadingZerosNumber(valueDuration.hour)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.minute || 0)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.second || 0)}`;

    // valueNew += `${getLeadingZerosNumber(Math.floor((valueDuration.millisecond || 0) / 10))}`;

    return valueNew;
  };

  const value_ = status === 'initial' ? '00:00' : valueFormat(value);

  const iconProps = {
    size,

    ...IconProps
  };

  const iconButtonProps = {
    size,
    loading,
    disabled,

    ...IconButtonProps
  };

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={1}

      direction='row'

      align='center'

      Component={Component}

      className={classNames([
        staticClassName('AudioRecorder', theme) && [
          `onesy-AudioRecorder-root`,
          `onesy-AudioRecorder-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {status !== 'initial' && (
        <Fade
          in

          add
        >
          <Line
            gap={1}

            direction='row'

            align='center'
          >
            {status === 'running' && (
              <span
                className={classNames([
                  classes.recordDot,
                  classes[`recordDot_size_${size}`]
                ])}
              />
            )}

            {/* Time */}
            {is('function', renderTime) ? renderTime(value_) : (
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                className={classNames([
                  staticClassName('AudioRecorder', theme) && [
                    'onesy-AudioRecorder-time'
                  ],

                  classes.time
                ])}
              >
                {value_}
              </Type>
            )}
          </Line>
        </Fade>
      )}

      {status === 'initial' && (
        <Fade
          in

          add
        >
          <span>
            {is('function', renderMain) ? renderMain({ onStart, supported } as any) : <>
              {/* Start */}
              <Tooltip
                name={l('Voice record')}

                {...TooltipProps}
              >
                <IconButton
                  onClick={onStart}

                  disabled={!supported}

                  {...iconButtonProps}
                >
                  <Icon_
                    {...iconProps}
                  />
                </IconButton>
              </Tooltip>
            </>}
          </span>
        </Fade>
      )}

      {status === 'running' && (
        <Fade
          in

          add
        >
          <span>
            {/* Cancel */}
            <Tooltip
              name={l('Cancel')}

              {...TooltipProps}
            >
              <IconButton
                onClick={onStop}

                {...iconButtonProps}
              >
                <IconStop
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>

            {/* Pause */}
            {pause && (
              <Tooltip
                name={l('Pause')}

                {...TooltipProps}
              >
                <IconButton
                  onClick={onPause}

                  {...iconButtonProps}
                >
                  <IconPause
                    {...iconProps}
                  />
                </IconButton>
              </Tooltip>
            )}

            {/* Confirm */}
            <Tooltip
              name={l('Confirm')}

              {...TooltipProps}
            >
              <IconButton
                onClick={onConfirm}

                {...iconButtonProps}
              >
                <IconConfirm
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>
          </span>
        </Fade>
      )}

      {status === 'paused' && (
        <Fade
          in

          add
        >
          <span>
            {/* Cancel */}
            <Tooltip
              name={l('Cancel')}

              {...TooltipProps}
            >
              <IconButton
                onClick={onStop}

                {...iconButtonProps}
              >
                <IconStop
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>

            {/* Resume */}
            <Tooltip
              name={l('Resume')}

              {...TooltipProps}
            >
              <IconButton
                onClick={onResume}

                {...iconButtonProps}
              >
                <IconStart
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>

            {/* Confirm */}
            <Tooltip
              name={l('Confirm')}

              {...TooltipProps}
            >
              <IconButton
                onClick={onConfirm}

                {...iconButtonProps}
              >
                <IconConfirm
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>
          </span>
        </Fade>
      )}
    </Line>
  );
});

AudioRecorder.displayName = 'onesy-AudioRecorder';

export default AudioRecorder;
