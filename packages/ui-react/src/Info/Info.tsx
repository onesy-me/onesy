import React from 'react';

import { is } from '@onesy/utils';
import { classNames, style, useOnesyTheme } from '@onesy/style-react';

import IconMaterialInfo from '@onesy/icons-material-rounded-react/IconMaterialInfoW100';

import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import MenuElement from '../Menu';
import TooltipElement from '../Tooltip';
import TypeElement from '../Type';
import { IMenu } from '../Menu/Menu';
import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  menu: {
    width: '100vw',
    maxWidth: '195px',
    background: theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.default.quaternary,
    borderRadius: theme.methods.shape.radius.value(2),
    boxShadow: theme.shadows.values.default[1],
    padding: '16px',

    '& .onesy-Type-root': {
      whiteSpace: 'normal'
    }
  }
}), { name: 'onesy-Info' });

export interface IInfo extends IMenu {
  name?: string;

  title?: string;

  render?: () => any;

  Icon?: any;

  IconProps?: any;
  IconButtonProps?: any;
  TitleProps?: any;
  ContainerProps?: any;
  TooltipProps?: any;
}

const Info: React.FC<IInfo> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyInfo?.props?.default, ...props_ }), [props_]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    name,

    title,

    render,

    Icon = IconMaterialInfo,

    IconProps,
    IconButtonProps,
    TitleProps,
    ContainerProps,
    TooltipProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Menu
      ref={ref}

      alignment='center'

      name={is('function', render) ? render() : (
        <Line
          gap={1}

          fullWidth

          className={classNames([
            staticClassName('Info', theme) && [
              'onesy-Info-menu'
            ],

            classes.menu
          ])}
        >
          <Line
            gap={1}

            fullWidth

            {...ContainerProps}
          >
            <Type
              version='l2'

              {...TitleProps}
            >
              {title}
            </Type>

            {children}
          </Line>
        </Line>
      )}

      className={classNames([
        staticClassName('Info', theme) && [
          'onesy-Info-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <span>
        <Tooltip
          name={name !== undefined ? name : 'Info'}

          {...TooltipProps}
        >
          <IconButton
            {...IconButtonProps}
          >
            <Icon
              {...IconProps}
            />
          </IconButton>
        </Tooltip>
      </span>
    </Menu>
  );
});

Info.displayName = 'onesy-Info';

export default Info;
