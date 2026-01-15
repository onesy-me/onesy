import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TooltipElement from '../Tooltip';
import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import LineElement from '../Line';
import InteractionElement from '../Interaction';
import { ISurface } from '../Surface/Surface';
import { ITooltip } from '../Tooltip/Tooltip';
import { staticClassName } from '../utils';
import { IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    // Reset
    fontFamily: 'inherit',
    '-webkit-appearance': 'none',
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0',
    overflow: 'visible',
    textTransform: 'none',

    position: 'relative',
    flex: '0 0 auto',
    alignSelf: 'stretch',
    userSelect: 'none',
    cursor: 'pointer',
    opacity: theme.palette.visual_contrast.default.opacity.tertiary,
    transition: theme.methods.transitions.make('opacity')
  },

  size_small: {
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(3, 'px')}`,
    minWidth: '40px',
    maxWidth: '200px'
  },

  size_regular: {
    padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(4, 'px')}`,
    minWidth: '70px',
    maxWidth: '240px'
  },

  size_large: {
    padding: `${theme.methods.space.value(2.5, 'px')} ${theme.methods.space.value(5, 'px')}`,
    minWidth: '100px',
    maxWidth: '280px'
  },

  type_small: {
    maxHeight: '2rem'
  },

  type_regular: {
    maxHeight: '2.15rem'
  },

  type_large: {
    maxHeight: '2.6rem'
  },

  line: {
    overflow: 'hidden'
  },

  active: {
    opacity: '1'
  },

  disabled: {
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    cursor: 'default'
  }
}), { name: 'onesy-Tab' });

export type ITab = Omit<ISurface, 'version' | 'onChange'> & {
  version?: 'primary' | 'secondary';

  size?: 'small' | 'regular' | 'large';

  value?: any;
  onChange?: (value: any, index: number) => any;

  active?: boolean;
  index?: number;

  name?: IElement;
  label?: IElement;

  icon?: IElement;
  iconPosition?: 'start' | 'top' | 'bottom' | 'end';

  tooltip?: any;

  activateOnFocus?: boolean;

  onBlur?: (event: React.FocusEvent<any>) => any;
  onFocus?: (event: React.FocusEvent<any>) => any;

  LineProps?: IPropsAny;
  TooltipProps?: ITooltip;
};

const Tab: React.FC<ITab> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTab?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Type = theme?.elements?.Type || TypeElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const Interaction = theme?.elements?.Interaction || InteractionElement;

  const Tooltip = theme?.elements?.Tooltip || TooltipElement;

  const {
    tonal = true,
    color = 'primary',

    version = 'primary',

    size = 'regular',

    value,
    onChange,

    active,
    index,

    name,
    label: label_,

    icon,
    iconPosition = 'start',

    activateOnFocus,

    tooltip,

    readOnly,
    disabled,

    onBlur: onBlur_,
    onFocus: onFocus_,

    LineProps = {},
    TooltipProps,

    Component = 'button',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [focus, setFocus] = React.useState(false);

  const label = name !== undefined ? name : label_;

  const onBlur = (event: React.FocusEvent<any>) => {
    if (!disabled) setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  };

  const onFocus = (event: React.FocusEvent<any>) => {
    if (!disabled) {
      setFocus(true);

      if (activateOnFocus) onChange(value, index);
    }

    if (is('function', onFocus_)) onFocus_(event);
  };

  if (icon !== undefined) {
    LineProps.direction = iconPosition === 'start' ? 'row' : iconPosition === 'top' ? 'column' : iconPosition === 'end' ? 'row-reverse' : 'column-reverse';
  }

  let typeVersion = 'l2';

  if (size === 'large') typeVersion = 'l1';
  else if (size === 'small') typeVersion = 'l3';

  const hasTooltip = ![null, undefined].includes(tooltip);

  const Wrapper = hasTooltip ? Tooltip : React.Fragment;

  const wrapperProps: any = hasTooltip ? { name: tooltip, ...TooltipProps } : undefined;

  return (
    <Wrapper
      {...wrapperProps}
    >
      <Surface
        tabIndex={!(readOnly || disabled) ? 0 : -1}

        tonal={tonal}

        color={color}

        onBlur={onBlur}

        onFocus={onFocus}

        role='tab'

        aria-selected={active}

        data-onesy-tab-value={value}

        Component={Component}

        className={classNames([
          staticClassName('Tab', theme) && [
            'onesy-Tab-root',
            `onesy-Tab-version-${version}`,
            `onesy-Tab-size-${size}`,
            active && `onesy-Tab-active`,
            disabled && `onesy-Tab-disabled`
          ],

          className,
          classes.root,
          classes[`size_${size}`],
          active && classes.active,
          disabled && classes.disabled
        ])}

        {...other}
      >
        <Interaction
          pulse={focus}
        />

        <Line
          gap={1}

          direction='row'

          align='center'

          justify='center'

          {...LineProps}

          className={classNames([
            staticClassName('Tab', theme) && [
              'onesy-Tab-line'
            ],

            LineProps?.className,
            classes.line
          ])}
        >
          {icon}

          {label !== undefined && (
            is('simple', label) ? (
              <Type
                version={typeVersion as any}

                className={classNames([
                  staticClassName('Tab', theme) && [
                    'onesy-Tab-type'
                  ],

                  classes[`type_${size}`]
                ])}
              >
                {label}
              </Type>
            ) : label
          )}

          {children !== undefined && (
            is('simple', children) ? (
              <Type
                version={typeVersion as any}

                className={classNames([
                  staticClassName('Tab', theme) && [
                    'onesy-Tab-type'
                  ],

                  classes[`type_${size}`]
                ])}
              >
                {children}
              </Type>
            ) : children
          )}
        </Line>
      </Surface>
    </Wrapper>
  );
};

Tab.displayName = 'onesy-Tab';

export default Tab;
