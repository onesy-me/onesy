import React from 'react';

import { getLeadingZerosNumber, is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import { AmauiDate, duration } from '@amaui/date';

import IconMaterialMic from '@amaui/icons-material-rounded-react/IconMaterialMicW100';
import IconMaterialSend from '@amaui/icons-material-rounded-react/IconMaterialSendW100';
import IconMaterialPlayArrow from '@amaui/icons-material-rounded-react/IconMaterialPlayArrowW100';
import IconMaterialPause from '@amaui/icons-material-rounded-react/IconMaterialPauseW100';
import IconMaterialStop from '@amaui/icons-material-rounded-react/IconMaterialStopW100';

import LineElement from '../Line';
import FadeElement from '../Fade';
import TypeElement from '../Type';
import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny, ISize } from '../types';

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
    '&.amaui-Type-root': {
      whiteSpace: 'nowrap'
    }
  }
}), { name: 'amaui-AudioRecorder' });

export interface IAudioRecorder extends ILine {
  size?: ISize;

  pause?: boolean;

  renderMain?: (props: { onStart: () => any; supported: boolean; }) => any;
  renderTime?: (value: string) => any;

  loading?: any;
  disabled?: any;

  Icon?: IElementReference;
  IconConfirm?: IElementReference;
  IconStart?: IElementReference;
  IconPause?: IElementReference;
  IconStop?: IElementReference;

  onConfirm?: (value: Blob) => any;
  onData?: (value: Blob) => any;
  onStart?: (event: React.MouseEvent<any>) => any;
  onPause?: (event: React.MouseEvent<any>) => any;
  onResume?: (event: React.MouseEvent<any>) => any;
  onStop?: (event: React.MouseEvent<any>) => any;
  onError?: (error: Error) => any;

  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  IconProps?: IPropsAny;
}

const AudioRecorder: React.FC<IAudioRecorder> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiAudioRecorder?.props?.default, ...props_ }), [props_]);

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
    root: React.useRef<any>(),
    mediaRecorder: React.useRef<MediaRecorder>(),
    mediaRecorderBytes: React.useRef<any>([]),
    start: React.useRef<number>(0),
    valuePaused: React.useRef<any>(0),
    value: React.useRef<any>(),
    animationFrame: React.useRef<any>(),
    onData: React.useRef<any>()
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
    setValue(refs.valuePaused.current + (AmauiDate.milliseconds - refs.start.current));

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

    refs.start.current = AmauiDate.milliseconds;

    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    setStatus('running');

    if (is('function', onStart_)) onStart_(event);
  }, [onStart_, onError]);

  const onPause = React.useCallback((event: React.MouseEvent<any>) => {
    // media recorder
    if (refs.mediaRecorder.current) {
      refs.mediaRecorder.current.pause();
    }

    clear();

    // Remember previous value
    refs.valuePaused.current = refs.value.current;

    setStatus('paused');

    if (is('function', onPause_)) onPause_(event);
  }, [onPause_]);

  const onStop = React.useCallback((event: React.MouseEvent<any>) => {
    // media recorder
    if (refs.mediaRecorder.current) {
      refs.mediaRecorder.current.stop();
    }

    clear();

    setStatus('initial');

    setValue(0);

    refs.start.current = 0;

    refs.valuePaused.current = 0;

    refs.value.current = 0;

    if (is('function', onStop_)) onStop_(event);
  }, [onStop_]);

  const onConfirm = React.useCallback(async (event: React.MouseEvent<any>) => {
    // Stop
    onStop(event);

    setTimeout(() => {
      // Get the blob
      const mimeType = refs.mediaRecorder.current?.mimeType;

      console.log('AudioRecorder onConfirm', mimeType);

      const blob = new Blob(refs.mediaRecorderBytes.current, { type: mimeType });

      // clean up
      refs.mediaRecorderBytes.current = [];

      console.log('AudioRecorder blob', blob, blob.size);

      if (is('function', onConfirm_)) onConfirm_(blob);
    }, 14);
  }, [onStop, onConfirm_]);

  const onResume = React.useCallback((event: React.MouseEvent<any>) => {
    // media recorder
    if (refs.mediaRecorder.current) {
      refs.mediaRecorder.current.resume();
    }

    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    // Update start, valuePaused value
    refs.start.current = AmauiDate.milliseconds;

    setStatus('running');

    if (is('function', onResume_)) onResume_(event);
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
          `amaui-AudioRecorder-root`,
          `amaui-AudioRecorder-size-${size}`
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
                    'amaui-AudioRecorder-time'
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
                label='Voice record'

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
              label='Cancel'

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
                label='Pause'

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
              label='Confirm'

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
              label='Cancel'

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
              label='Resume'

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
              label='Confirm'

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

AudioRecorder.displayName = 'amaui-AudioRecorder';

export default AudioRecorder;
