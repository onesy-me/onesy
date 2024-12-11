import React from 'react';

import { is, getLeadingZerosNumber } from '@onesy/utils';
import { OnesyDate, duration } from '@onesy/date';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialTimer from '@onesy/icons-material-rounded-react/IconMaterialTimerW100';
import IconMaterialPlayArrow from '@onesy/icons-material-rounded-react/IconMaterialPlayArrowW100';
import IconMaterialPause from '@onesy/icons-material-rounded-react/IconMaterialPauseW100';
import IconMaterialStop from '@onesy/icons-material-rounded-react/IconMaterialStopW100';
import IconMaterialFlag from '@onesy/icons-material-rounded-react/IconMaterialFlagW100';

import FadeElement from '../Fade';
import ExpandElement from '../Expand';
import TypeElement from '../Type';
import TooltipElement from '../Tooltip';
import TreeElement from '../Tree';
import SurfaceElement from '../Surface';
import LineElement from '../Line';
import IconButtonElement from '../IconButton';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    minWidth: '300px',
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(5, 'px')}`,
    borderRadius: theme.methods.shape.radius.value('rg', 'px')
  },

  value: {
    marginTop: '8px'
  },

  flags_wrapper: {
    width: '100%',
    paddingTop: theme.methods.space.value(1, 'px')
  },

  flags: {
    width: '100%',
    maxHeight: '170px',
    overflowY: 'auto'
  },

  flag: {
    width: '100%',
    paddingInlineStart: theme.methods.space.value(0.5, 'px')
  },

  actions: {
    marginTop: '8px'
  }
}), { name: 'onesy-Timer' });

export interface ITimer extends ISurface {
  renderValue?: (value: string) => any;

  icon?: boolean;

  onStart?: (event: React.MouseEvent<any>) => any;
  onFlag?: (event: React.MouseEvent<any>) => any;
  onPause?: (event: React.MouseEvent<any>) => any;
  onStop?: (event: React.MouseEvent<any>) => any;
  onResume?: (event: React.MouseEvent<any>) => any;

  Icon?: IElementReference;
  IconStart?: IElementReference;
  IconPause?: IElementReference;
  IconFlag?: IElementReference;
  IconStop?: IElementReference;

  TreeProps?: IPropsAny;
  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  IconProps?: IPropsAny;
}

const Timer: React.FC<ITimer> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTimer?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Expand = React.useMemo(() => theme?.elements?.Expand || ExpandElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Tree = React.useMemo(() => theme?.elements?.Tree || TreeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    renderValue,

    icon = true,

    onStart: onStart_,
    onFlag: onFlag_,
    onPause: onPause_,
    onStop: onStop_,
    onResume: onResume_,

    Icon: Icon_ = IconMaterialTimer,
    IconStart = IconMaterialPlayArrow,
    IconPause = IconMaterialPause,
    IconFlag = IconMaterialFlag,
    IconStop = IconMaterialStop,

    TreeProps: TreeProps_,
    TooltipProps: TooltipProps_,
    IconButtonProps: IconButtonProps_,
    IconProps: IconProps_,

    Component = 'div',

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [status, setStatus] = React.useState('initial');
  const [flags, setFlags] = React.useState([]);
  const [expand, setExpand] = React.useState<any>();
  const [value, setValue] = React.useState<number>(0);

  const refs = {
    root: React.useRef<any>(undefined),
    start: React.useRef<number>(0),
    valuePaused: React.useRef<any>(0),
    value: React.useRef<any>(undefined),
    animationFrame: React.useRef<any>(undefined)
  };

  refs.value.current = value;

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
    setValue(refs.valuePaused.current + (OnesyDate.milliseconds - refs.start.current));

    refs.animationFrame.current = requestAnimationFrame(update);
  };

  const onStart = React.useCallback((event: React.MouseEvent<any>) => {
    refs.start.current = OnesyDate.milliseconds;

    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    setStatus('running');

    if (is('function', onStart_)) onStart_(event);
  }, []);

  const onFlag = React.useCallback((event: React.MouseEvent<any>) => {
    if (!expand) setExpand(true);

    setFlags(values => [...values, refs.value.current]);

    if (is('function', onFlag_)) onFlag_(event);
  }, [expand]);

  const onPause = React.useCallback((event: React.MouseEvent<any>) => {
    clear();

    // Remember previous value
    refs.valuePaused.current = refs.value.current;

    setStatus('paused');

    if (is('function', onPause_)) onPause_(event);
  }, []);

  const onStop = React.useCallback((event: React.MouseEvent<any>) => {
    clear();

    setStatus('initial');

    setExpand(false);

    setValue(0);

    refs.start.current = 0;

    refs.valuePaused.current = 0;

    refs.value.current = 0;

    if (is('function', onStop_)) onStop_(event);
  }, []);

  const onResume = React.useCallback((event: React.MouseEvent<any>) => {
    // ~60+ fps
    refs.animationFrame.current = requestAnimationFrame(update);

    // Update start, valuePaused value
    refs.start.current = OnesyDate.milliseconds;

    setStatus('running');

    if (is('function', onResume_)) onResume_(event);
  }, []);

  const onExited = React.useCallback(() => {
    setFlags([]);
  }, []);

  const IconProps = {

    ...IconProps_
  };

  const TooltipProps = {
    portal: true,
    interactive: false,

    ...TooltipProps_
  };

  const TreeProps = {
    tonal,
    color: 'inherit',

    ...TreeProps_
  };

  const IconButtonProps = {
    tonal,
    color: 'inherit',
    version: 'text',

    ...IconButtonProps_
  };

  const valueFormat = (valueNew_: number) => {
    let valueNew = '';

    const valueDuration: any = duration(valueNew_, undefined, true, undefined, ['hour', 'minute', 'second', 'millisecond']);

    if (valueDuration.hour > 0) valueNew += `${getLeadingZerosNumber(valueDuration.hour)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.minute || 0)}:`;

    valueNew += `${getLeadingZerosNumber(valueDuration.second || 0)}.`;

    valueNew += `${getLeadingZerosNumber(Math.floor((valueDuration.millisecond || 0) / 10))}`;

    return valueNew;
  };

  const value_ = status === 'initial' ? '00:00.00' : valueFormat(value);

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else if (ref?.current) ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      align='center'

      Component={Line}

      AdditionalProps={{
        Component
      }}

      className={classNames([
        staticClassName('Timer', theme) && [
          'onesy-Timer-root'
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

      {/* Time */}
      {is('function', renderValue) ? renderValue(value_) : (
        <Type
          version='h1'

          className={classNames([
            staticClassName('Timer', theme) && [
              'onesy-Timer-value'
            ],

            classes.value
          ])}
        >
          {value_}
        </Type>
      )}

      {/* Flags */}
      <Expand
        in={expand}

        parent={refs.root.current}

        onExited={onExited}

        className={classNames([
          staticClassName('Timer', theme) && [
            'onesy-Timer-flags-wrapper'
          ],

          classes.flags_wrapper
        ])}
      >
        <div>
          <Surface
            tonal={tonal}

            color={color}
          >
            {({ palette }) => {

              return (
                <Tree
                  openDefault

                  middle='Flags'

                  indicator

                  indicatorPosition='end'

                  parent={refs.root.current}

                  TreeProps={{
                    className: classNames([
                      staticClassName('Timer', theme) && [
                        'onesy-Timer-flags'
                      ],

                      classes.flags
                    ])
                  }}

                  {...TreeProps}
                >
                  {flags.map((item: number, index: number) => (
                    <Tree
                      key={index}

                      icon={(
                        <IconFlag
                          size='small'

                          color={palette[40]}
                        />
                      )}

                      middle={(
                        <Line
                          direction='row'

                          align='center'

                          justify='space-between'

                          className={classNames([
                            classes.flag
                          ])}
                        >
                          <Type
                            version='b2'
                          >
                            {getLeadingZerosNumber(index + 1)}
                          </Type>

                          <Type
                            version='b2'

                            style={{
                              opacity: '0.7'
                            }}
                          >
                            +{valueFormat(item - (flags[index - 1] || 0))}
                          </Type>

                          <Type
                            version='b2'
                          >
                            {valueFormat(item)}
                          </Type>
                        </Line>
                      )}

                      noPadding

                      indicator

                      indicatorPosition='end'

                      {...TreeProps}
                    />
                  ))}
                </Tree>
              );
            }}
          </Surface>
        </div>
      </Expand>

      {/* Controls */}
      <Line
        gap={1}

        direction='row'

        align='center'

        justify='center'

        className={classNames([
          staticClassName('Timer', theme) && [
            'onesy-Timer-actions'
          ],

          classes.actions
        ])}
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
              {/* Flag */}
              <Tooltip
                label='Flag'

                {...TooltipProps}
              >
                <IconButton
                  onClick={onFlag}

                  {...IconButtonProps}
                >
                  <IconFlag />
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

Timer.displayName = 'onesy-Timer';

export default Timer;
