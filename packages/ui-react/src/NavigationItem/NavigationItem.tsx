import React from 'react';

import { is, isEnvironment } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TypeElement from '../Type';
import LineElement from '../Line';
import TooltipElement from '../Tooltip';
import TransitionElement, { TTransitionStatus } from '../Transition';
import { ITooltip } from '../Tooltip/Tooltip';
import { staticClassName } from '../utils';
import { IElement, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    flex: '1 1 auto',
    cursor: 'pointer',
    userSelect: 'none'
  },

  vertical: {
    flex: '0 0 auto',
    padding: '0px',
    minHeight: '52px',
    width: '100%'
  },

  iconWrapper: {
    position: 'relative',
    height: '32px',
    width: '64px'
  },

  iconWrapper_center: {
    top: '50%',
    transform: 'translateY(-50%)',
    transition: theme.methods.transitions.make(['top', 'transform']),
  },

  iconWrapper_center_selected: {
    top: '0',
    transform: 'translateY(0)'
  },

  icon: {
    lineHeight: '0'
  },

  indicator: {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    borderRadius: theme.methods.shape.radius.value(40, 'px'),
    opacity: '0',
    transform: 'scaleX(0.74)',
    transition: theme.methods.transitions.make(['opacity', 'transform']),
    pointerEvents: 'none',
    background: 'currentColor',
  },

  indicator_enter: {
    opacity: '0',
    transform: 'scaleX(0.74)',
  },

  indicator_entering: {
    opacity: '1',
    transform: 'scaleX(1)'
  },

  indicator_entered: {
    opacity: '1',
    transform: 'scaleX(1)'
  },

  indicator_exit: {
    opacity: '1',
    transform: 'scaleX(1)'
  },

  indicator_exiting: {
    opacity: '0',
    transform: 'scaleX(1)',
    transition: theme.methods.transitions.make(['opacity', 'transform'], { duration: 0 })
  },

  indicator_exited: {
    opacity: '0',
    transform: 'scaleX(0.74)'
  },

  indicator_hover: { opacity: theme.palette.visual_contrast.default.opacity.hover },

  indicator_selected: { opacity: theme.palette.visual_contrast.default.opacity.selected },

  indicator_focus: { opacity: theme.palette.visual_contrast.default.opacity.focus },

  indicator_pressed: { opacity: theme.palette.visual_contrast.default.opacity.press },

  disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    pointerEvents: 'none',
    cursor: 'default'
  }
}), { name: 'onesy-NavigationItem' });

export type INavigationItemVersion = 'regular' | 'auto';

export type INavigationItem = ITooltip & {
  version?: 'regular' | 'auto';

  value?: any;

  name?: IElement;
  nameTooltip?: any;

  vertical?: boolean;

  icon?: IElement;
  iconSelected?: IElement;

  selected?: boolean;
  disabled?: boolean;

  IconWrapperComponent?: IElementReference;

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;
  onKeyDown?: (event: React.KeyboardEvent<any>) => any;
  onMouseDown?: (event: React.MouseEvent<any>) => any;
  onMouseEnter?: (event: React.MouseEvent<any>) => any;
  onMouseLeave?: (event: React.MouseEvent<any>) => any;
  onTouchStart?: (event: React.TouchEvent<any>) => any;

  TooltipProps?: IPropsAny;
  LabelProps?: IPropsAny;
  IconWrapperProps?: IPropsAny;
};

const NavigationItem: React.FC<INavigationItem> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyNavigationItem?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Type = theme?.elements?.Type || TypeElement;

  const Tooltip = theme?.elements?.Tooltip || TooltipElement;

  const Transition = theme?.elements?.Transition || TransitionElement;

  const {
    ref,

    tonal = true,
    color = 'primary',
    version = 'regular',

    value,

    name,
    nameTooltip,

    vertical,

    icon,
    iconSelected,

    selected,
    readOnly,
    disabled,

    IconWrapperComponent = 'span',

    onFocus: onFocus_,
    onBlur: onBlur_,
    onKeyDown: onKeyDown_,
    onMouseDown: onMouseDown_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,
    onTouchStart: onTouchStart_,

    TooltipProps,
    LabelProps,
    IconWrapperProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);

  const refs = {
    root: React.useRef<any>(undefined),
    props: React.useRef<any>(undefined),
    hover: React.useRef<any>(undefined)
  };

  const styles: any = {
    icon: {},
    label: {},
    indicator: {}
  };

  refs.props.current = props;
  refs.hover.current = hover;

  React.useEffect(() => {
    const onMouseUp = () => {
      if (!refs.props.current.disabled) {
        setMouseDown(false);

        setFocus(false);
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('mouseup', onMouseUp);

    return () => {
      rootDocument.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  React.useEffect(() => {
    if (!selected) {
      if (refs.hover.current) setHover(false);
    }
  }, [selected]);

  const onKeyDown = (event: React.KeyboardEvent<any>) => {
    if (!disabled) {
      if (event.key === 'Enter') {
        if (is('function', props.onClick)) props.onClick(event as any);
      }
    }

    if (is('function', onKeyDown_)) onKeyDown_(event);
  };

  const onFocus = (event: React.FocusEvent<any>) => {
    if (!disabled) setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  };

  const onBlur = (event: React.FocusEvent<any>) => {
    if (!disabled) setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  };

  const onTouchStart = (event: React.TouchEvent<any>) => {
    if (!disabled) setMouseDown(true);

    if (is('function', onTouchStart)) onTouchStart(event);
  };

  const onMouseDown = (event: React.MouseEvent<any>) => {
    if (!disabled) setMouseDown(true);

    if (is('function', onMouseDown_)) onMouseDown_(event);
  };

  const onMouseEnter = (event: React.MouseEvent<any>) => {
    if (!disabled) setHover(true);

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  };

  const onMouseLeave = (event: React.MouseEvent<any>) => {
    if (!refs.props.current.disabled) setHover(false);

    if (is('function', onMouseLeave_)) onMouseLeave_(event);
  };

  let palette: any;

  if (!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color)) {
    palette = theme.methods.color(color);
  }

  if (!tonal) {
    let background = (theme.palette.color[color] as any)?.main;

    if (color === 'default') background = theme.palette.background.default.primary;

    styles.icon.color = styles.label.color = styles.indicator.color = theme.methods.palette.color.text(palette?.main || background, true, 'light');
  }
  else {
    styles.indicator.color = palette?.main || (color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any).main);

    styles.icon.color = styles.label.color = theme.methods.palette.color.value(color as any, 5, true, palette);
  }

  const Icon = (selected && iconSelected) || icon;

  return (
    <Tooltip
      name={nameTooltip ?? name ?? value}

      position='top'

      alignment='center'

      longPress

      touch={false}

      hover={false}

      focus={false}

      {...TooltipProps}
    >
      <span
        tabIndex={!(readOnly || disabled) ? 0 : undefined}

        onFocus={onFocus}

        onBlur={onBlur}

        onKeyDown={onKeyDown}

        onTouchStart={onTouchStart}

        onMouseDown={onMouseDown}

        onMouseEnter={onMouseEnter}

        onMouseLeave={onMouseLeave}

        className={classNames([
          staticClassName('NavigationItem', theme) && [
            'onesy-NavigationItem-root',
            selected && 'onesy-NavigationItem-selected',
            hover && `onesy-NavigationItem-hover`,
            mouseDown && `onesy-NavigationItem-mouse-down`,
            focus && `onesy-NavigationItem-focus`,
            readOnly && `onesy-NavigationItem-readOnly`,
            disabled && `onesy-NavigationItem-disabled`
          ],

          className,
          classes.root,
          vertical && classes.vertical,
          disabled && classes.disabled
        ])}

        style={{
          ...style
        }}

        {...other}
      >
        <Line
          ref={item => {
            if (ref) {
              if (is('function', ref)) ref(item);
              else ref.current = item;
            }

            refs.root.current = item;
          }}

          direction='column'

          align='center'

          justify='center'

          gap={0.25}

          className={classNames([
            staticClassName('NavigationItem', theme) && [
              'onesy-NavigationItem-item'
            ],

            classes.item
          ])}
        >
          {Icon && (
            <Line
              Component='span'

              align='center'

              justify='center'

              className={classNames([
                staticClassName('NavigationItem', theme) && [
                  'onesy-NavigationItem-icon-wrapper'
                ],

                classes.iconWrapper,
                ['none', 'auto'].includes(version) && classes.iconWrapper_center,
                ['auto'].includes(version) && selected && classes.iconWrapper_center_selected
              ])}
            >
              <Transition
                in={hover || focus || selected}
              >
                {(status: TTransitionStatus) => (
                  <span
                    className={classNames([
                      staticClassName('NavigationItem', theme) && [
                        'onesy-NavigationItem-indicator'
                      ],

                      classes.indicator,
                      classes[`indicator_${status}`],
                      selected && classes.indicator_selected,
                      hover && classes.indicator_hover,
                      focus && classes.indicator_focus,
                      mouseDown && classes.indicator_pressed
                    ])}

                    style={styles.indicator}
                  />
                )}
              </Transition>

              <IconWrapperComponent
                {...IconWrapperProps}

                className={classNames([
                  staticClassName('NavigationItem', theme) && [
                    'onesy-NavigationItem-icon'
                  ],

                  IconWrapperProps?.className,
                  classes.icon
                ])}
              >
                {React.cloneElement(Icon as any, {
                  style: {
                    ...(Icon as any).props.style,

                    ...styles.icon
                  }
                })}
              </IconWrapperComponent>
            </Line>
          )}

          {(version === 'regular' || (version === 'auto' && selected)) && (
            <Type
              version='b3'

              {...LabelProps}

              className={classNames([
                staticClassName('NavigationItem', theme) && [
                  'onesy-NavigationItem-label',
                  LabelProps?.className
                ]
              ])}

              style={{
                ...styles.label,

                ...LabelProps?.style
              }}
            >
              {name}
            </Type>
          )}
        </Line>
      </span>
    </Tooltip>
  );
};

NavigationItem.displayName = 'onesy-NavigationItem';

export default NavigationItem;
