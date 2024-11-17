import React from 'react';

import { clamp, getLeadingZerosNumber, is } from '@amaui/utils';
import { AmauiDate, duration } from '@amaui/date';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconMaterialAvTimer from '@amaui/icons-material-rounded-react/IconMaterialAvTimerW100';
import IconMaterialPlayArrow from '@amaui/icons-material-rounded-react/IconMaterialPlayArrowW100';
import IconMaterialPause from '@amaui/icons-material-rounded-react/IconMaterialPauseW100';
import IconMaterialStop from '@amaui/icons-material-rounded-react/IconMaterialStopW100';

import FadeElement from '../Fade';
import TypeElement from '../Type';
import TooltipElement from '../Tooltip';
import SurfaceElement from '../Surface';
import NumericTextFieldElement from '../NumericTextField';
import RoundProgressElement from '../RoundProgress';
import LinearProgressElement from '../LinearProgress';
import LineElement from '../Line';
import IconButtonElement from '../IconButton';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IElement, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    minWidth: '314px',
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(5, 'px')}`,
    borderRadius: theme.methods.shape.radius.value('rg', 'px')
  },

  roundWrapper: {
    position: 'relative',
    width: '240px',
    height: '240px'
  },

  linearProgress: {
    borderRadius: theme.methods.shape.radius.value(40, 'px'),

    '&.amaui-LinearProgress-root': {
      height: '6px'
    },

    '& .amaui-LinearProgress-line, & .amaui-LinearProgress-buffer': {
      borderRadius: theme.methods.shape.radius.value(40, 'px')
    }
  },

  roundProgress: {
    '&.amaui-RoundedProgress-root': {
      position: 'absolute',
      inset: '0'
    },

    '& .amaui-RoundedProgress-svg': {
      width: '100%',
      height: '100%',
      margin: '0'
    },

    '& .amaui-RoundedProgress-path-background': {
      stroke: 'currentColor',
      opacity: '0.24'
    },

    '& .amaui-RoundedProgress-path, & .amaui-RoundedProgress-path-background': {
      strokeLinecap: 'round'
    }
  },

  meta: {
    maxWidth: '114px',
    textAlign: 'center'
  },

  numericTextField: {
    width: '70px',

    '& .amaui-TextField-input-wrapper': {
      paddingInline: '0px',
      paddingBlock: theme.methods.space.value(1, 'px'),
      height: 'auto'
    },

    '&.amaui-TextField-value .amaui-TextField-label, &.amaui-TextField-focus .amaui-TextField-label': {
      insetInlineStart: '60%',
      transform: `translate(${theme.direction === 'ltr' ? '-' : ''}50%, -16px) scale(0.667)`
    },

    '& .amaui-TextField-input': {
      ...theme.typography.values.h2,

      textAlign: 'center'
    },

    '& .amaui-TextField-border': {
      boxShadow: 'none'
    }
  }
}), { name: 'amaui-Countdown' });

export interface ICountdown extends Omit<ISurface, 'version'> {
  version?: 'linear' | 'round';

  renderValue?: (value: string) => IElement;
  icon?: boolean;

  onStart?: (event: React.MouseEvent<any>) => any;
  onPause?: (event: React.MouseEvent<any>) => any;
  onStop?: (event: React.MouseEvent<any>) => any;
  onResume?: (event: React.MouseEvent<any>) => any;

  Icon?: IElementReference;
  IconStart?: IElementReference;
  IconPause?: IElementReference;
  IconStop?: IElementReference;

  TreeProps?: IPropsAny;
  TooltipProps?: IPropsAny;
  RoundProgressProps?: IPropsAny;
  NumericTextFieldProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  LinearProgressProps?: IPropsAny;
  IconProps?: IPropsAny;
}

const Countdown: React.FC<ICountdown> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCountdown?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const NumericTextField = React.useMemo(() => theme?.elements?.NumericTextField || NumericTextFieldElement, [theme]);

  const RoundProgress = React.useMemo(() => theme?.elements?.RoundProgress || RoundProgressElement, [theme]);

  const LinearProgress = React.useMemo(() => theme?.elements?.LinearProgress || LinearProgressElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    version = 'linear',

    renderValue,
    icon = true,

    onStart: onStart_,
    onPause: onPause_,
    onStop: onStop_,
    onResume: onResume_,

    Icon: Icon_ = IconMaterialAvTimer,
    IconStart = IconMaterialPlayArrow,
    IconPause = IconMaterialPause,
    IconStop = IconMaterialStop,

    TreeProps: TreeProps_,
    TooltipProps: TooltipProps_,
    RoundProgressProps: RoundProgressProps_,
    NumericTextFieldProps: NumericTextFieldProps_,
    IconButtonProps: IconButtonProps_,
    LinearProgressProps: LinearProgressProps_,
    IconProps: IconProps_,

    Component = 'div',

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [status, setStatus] = React.useState('initial');
  const [value, setValue] = React.useState<number>(0);
  const [values, setValues] = React.useState<any>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const refs = {
    start: React.useRef<number>(0),
    valuePaused: React.useRef<any>(0),
    value: React.useRef<any>(),
    total: React.useRef<any>(),
    values: React.useRef<any>(),
    animationFrame: React.useRef<any>()
  };

  refs.value.current = value;

  refs.values.current = values;

  const updateValues = (property: string, valueItem: any) => {
    setValues(values_ => ({
      ...values_,

      [property]: valueItem
    }));
  };

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
    if (refs.value.current <= 0) {
      // Wait for linear, round progress
      // transitions to end
      setTimeout(() => {
        setStatus('initial');
      }, 1400);

      return clear();
    }

    setValue(refs.valuePaused.current - (AmauiDate.milliseconds - refs.start.current));

    refs.animationFrame.current = requestAnimationFrame(update);
  };

  const onStart = React.useCallback((event: React.MouseEvent<any>) => {
    refs.total.current = refs.valuePaused.current = (
      ((refs.values.current.hours || 0) * (60 ** 2) * 1e3) +
      ((refs.values.current.minutes || 0) * (60 ** 1) * 1e3) +
      ((refs.values.current.seconds || 0) * 1e3)
    );

    setValue(refs.valuePaused.current);

    setStatus('running');

    setTimeout(() => {
      refs.start.current = AmauiDate.milliseconds;

      refs.animationFrame.current = requestAnimationFrame(update);
    }, 14);

    if (is('function', onStart_)) onStart_(event);
  }, []);

  const onPause = React.useCallback((event: React.MouseEvent<any>) => {
    clear();

    // Remember previous value
    refs.valuePaused.current = refs.value.current;

    setStatus('paused');

    if (is('function', onPause_)) onPause_(event);
  }, []);

  const onStop = React.useCallback((event: React.MouseEvent<any>) => {
    clear();

    refs.start.current = 0;

    refs.valuePaused.current = 0;

    refs.value.current = 0;

    setStatus('initial');

    setValue(0);

    if (is('function', onStop_)) onStop_(event);
  }, []);

  const onResume = React.useCallback((event: React.MouseEvent<any>) => {
    // Update start, valuePaused value
    refs.start.current = AmauiDate.milliseconds;

    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    setStatus('running');

    if (is('function', onResume_)) onResume_(event);
  }, []);

  const IconProps = {

    ...IconProps_
  };

  const TooltipProps = {
    portal: true,
    interactive: false,

    ...TooltipProps_
  };

  const NumericTextFieldProps: any = {
    tonal,
    color: 'inherit',
    size: 'small',
    version: 'text',

    increment: false,
    decrement: false,

    ...NumericTextFieldProps_
  };

  const RoundProgressProps: any = {
    tonal,
    color,

    rounded: true,

    thickness: 1,

    ...RoundProgressProps_
  };

  const LinearProgressProps: any = {
    tonal,
    color,

    ...LinearProgressProps_
  };

  const IconButtonProps = {
    tonal,
    color: 'inherit',
    version: 'text',

    ...IconButtonProps_
  };

  const valueFormat = (valueNew_: number) => {
    let valueNew = '';

    const valueDuration: any = duration(valueNew_, undefined, true, undefined, ['hour', 'minute', 'second']);

    valueNew += `${getLeadingZerosNumber(valueDuration.hour || 0)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.minute || 0)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.second || 0)}`;

    return valueNew;
  };

  const value_ = status === 'initial' ? '00:00:00' : valueFormat(value);

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      gap={1}

      direction='column'

      align='center'

      Component={Line}

      AdditionalProps={{
        Component
      }}

      className={classNames([
        staticClassName('Countdown', theme) && [
          'amaui-Countdown-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {/* Icon  */}
      {icon && (
        <Icon_
          size='medium'

          {...IconProps}

          style={{
            marginBottom: 4,

            ...IconProps?.style
          }}
        />
      )}

      {/* Inputs */}
      {status === 'initial' && (
        <Fade
          in

          add
        >
          <Line
            gap={1}

            direction='row'

            align='flex-end'

            style={{
              marginTop: 12,
              marginBottom: -8
            }}
          >
            <NumericTextField
              label='Hours'

              min={0}

              max={23}

              value={values.hours}

              onChange={valueNew => updateValues('hours', !valueNew ? 0 : valueNew)}

              {...NumericTextFieldProps}

              className={classNames([
                staticClassName('Countdown', theme) && [
                  'amaui-Countdown-numeric-text-field'
                ],

                NumericTextFieldProps?.className,
                classes.numericTextField
              ])}
            />

            <NumericTextField
              label='Minutes'

              min={0}

              max={59}

              value={values.minutes}

              onChange={valueNew => updateValues('minutes', !valueNew ? 0 : valueNew)}

              {...NumericTextFieldProps}

              className={classNames([
                staticClassName('Countdown', theme) && [
                  'amaui-Countdown-numeric-text-field'
                ],

                NumericTextFieldProps?.className,
                classes.numericTextField
              ])}
            />

            <NumericTextField
              label='Seconds'

              min={0}

              max={59}

              value={values.seconds}

              onChange={valueNew => updateValues('seconds', !valueNew ? 0 : valueNew)}

              {...NumericTextFieldProps}

              className={classNames([
                staticClassName('Countdown', theme) && [
                  'amaui-Countdown-numeric-text-field'
                ],

                NumericTextFieldProps?.className,
                classes.numericTextField
              ])}
            />
          </Line>
        </Fade>
      )}

      {/* Time */}
      {status !== 'initial' && ['regular', 'linear'].includes(version) && (
        <Fade
          in

          add
        >
          <Line
            gap={1}

            direction='column'

            align='center'

            justify='center'

            style={{
              width: '100%'
            }}
          >
            {is('function', renderValue) ? renderValue(value_) : (
              <Type
                version='h1'
              >
                {value_}
              </Type>
            )}

            {version === 'linear' && (
              <LinearProgress
                version='determinate'

                value={clamp(Math.round(((value / 1000) / (refs.total.current / 1000)) * 100), 0, 100)}

                reverse

                style={{
                  margin: '4px 0 8px'
                }}

                {...LinearProgressProps}

                className={classNames([
                  staticClassName('Countdown', theme) && [
                    'amaui-Countdown-linear-progress'
                  ],

                  LinearProgressProps?.className,
                  classes.linearProgress
                ])}
              />
            )}
          </Line>
        </Fade>
      )}

      {status !== 'initial' && ['round'].includes(version) && (
        <Fade
          in

          add
        >
          <Line
            gap={0.5}

            direction='column'

            align='center'

            justify='center'

            className={classNames([
              staticClassName('Countdown', theme) && [
                'amaui-Countdown-round-wrapper'
              ],

              classes.roundWrapper
            ])}
          >
            <RoundProgress
              version='determinate'

              value={clamp(Math.round(((value / 1000) / (refs.total.current / 1000)) * 100), 0, 100)}

              {...RoundProgressProps}

              className={classNames([
                staticClassName('Countdown', theme) && [
                  'amaui-Countdown-round-progress'
                ],

                RoundProgressProps?.className,
                classes.roundProgress
              ])}
            />

            {is('function', renderValue) ? renderValue(value_) : (
              <Type
                version='h1'
              >
                {value_}
              </Type>
            )}

            <Type
              version='b3'

              className={classNames([
                staticClassName('Countdown', theme) && [
                  'amaui-Countdown-meta'
                ],

                classes.meta
              ])}
            >
              Total {duration(refs.total.current, false)}
            </Type>
          </Line>
        </Fade>
      )}

      {/* Controls */}
      <Line
        gap={1}

        direction='row'

        align='center'

        justify='center'
      >
        {status === 'initial' && (
          <Fade
            in

            add
          >
            <span>
              {/* Start */}
              <Tooltip
                label='Start'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onStart}

                  disabled={!((values.hours || 0) + (values.minutes || 0) + (values.seconds || 0))}

                  {...IconButtonProps}
                >
                  <IconStart />
                </IconButton>
              </Tooltip>
            </span>
          </Fade>
        )}

        {status === 'running' && (
          <Fade
            in

            add
          >
            <span>
              {/* Stop */}
              <Tooltip
                label='Stop'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onStop}

                  {...IconButtonProps}
                >
                  <IconStop />
                </IconButton>
              </Tooltip>

              {/* Pause */}
              <Tooltip
                label='Pause'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onPause}

                  {...IconButtonProps}
                >
                  <IconPause />
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
              {/* Stop */}
              <Tooltip
                label='Stop'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onStop}

                  {...IconButtonProps}
                >
                  <IconStop />
                </IconButton>
              </Tooltip>

              {/* Resume */}
              <Tooltip
                label='Resume'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onResume}

                  {...IconButtonProps}
                >
                  <IconStart />
                </IconButton>
              </Tooltip>
            </span>
          </Fade>
        )}
      </Line>
    </Surface>
  );
});

Countdown.displayName = 'amaui-Countdown';

export default Countdown;
