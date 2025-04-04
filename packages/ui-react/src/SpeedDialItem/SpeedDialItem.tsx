import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import { IIconButton } from '../IconButton/IconButton';
import { IElement, IElementReference, IPropsAny } from '../types';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    lineHeight: '0'
  },

  no_render: {
    '& .onesy-Button-root': {
      boxShadow: theme.shadows.values.default[6],

      '&:hover': {
        boxShadow: theme.shadows.values.default[8]
      },

      '&.onesy-Button-focus': {
        boxShadow: theme.shadows.values.default[8]
      }
    }
  }
}), { name: 'onesy-SpeedDialItem' });

export type ISpeedDialItem = IIconButton & {
  open?: boolean;

  name?: IElement;
  label?: IElement;
  tooltipOpen?: boolean;
  closeOnClick?: boolean;

  render?: (values: {
    onBlur: (event: React.FocusEvent<any>) => any;
    onFocus: (event: React.FocusEvent<any>) => any;
    TooltipProps: any;
    [p: string]: any;
  }) => IElement;

  onBlur?: (event: React.FocusEvent<any>) => any;
  onFocus?: (event: React.FocusEvent<any>) => any;

  Icon?: IElementReference;

  TooltipProps?: IPropsAny;
};

const SpeedDialItem: React.FC<ISpeedDialItem> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesySpeedDialItem?.props?.default, ...props_ }), [props_]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    open,

    name,
    label: label_,

    tooltipOpen,
    closeOnClick,

    render,

    onBlur,
    onFocus,

    Icon,

    TooltipProps = {
      alignment: 'center',
      interactive: false
    },

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  delete TooltipProps.open;

  if (tooltipOpen) TooltipProps.open = true;

  const label = name !== undefined ? name : label_;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('SpeedDialItem', theme) && [
          `onesy-SpeedDialItem-root`
        ],

        className,
        classes.root,
        !is('function', render) && classes.no_render
      ])}
    >
      {is('function', render) ?
        render({
          onBlur,
          onFocus,
          TooltipProps,
          ...other
        }) :
        <Tooltip
          name={label}

          portal

          nowrap

          {...TooltipProps}
        >
          <IconButton
            onBlur={onBlur}

            onFocus={onFocus}

            {...other}
          >
            <Icon />
          </IconButton>
        </Tooltip>
      }
    </Component>
  );
});

SpeedDialItem.displayName = 'onesy-SpeedDialItem';

export default SpeedDialItem;
