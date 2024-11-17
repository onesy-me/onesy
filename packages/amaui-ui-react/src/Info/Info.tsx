import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import IconMaterialInfo from '@amaui/icons-material-rounded-react/IconMaterialInfoW100';

import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import MenuElement from '../Menu';
import TooltipElement from '../Tooltip';
import TypeElement from '../Type';
import { IMenu } from '../Menu/Menu';
import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100vw',
    maxWidth: '195px',
    background: theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.primary.quaternary,
    borderRadius: theme.methods.shape.radius.value(2),
    boxShadow: theme.shadows.values.default[1],
    padding: '16px',

    '& .amaui-Type-root': {
      whiteSpace: 'normal'
    }
  }
}), { name: 'amaui-Info' });

export interface IInfo extends IMenu {
  name: string;

  Icon?: any;

  IconProps?: any;
  IconButtonProps?: any;
  NameProps?: any;
  ContainerProps?: any;
  TooltipProps?: any;
}

const Info: React.FC<IInfo> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiInfo?.props?.default, ...props_ }), [props_]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    name,

    Icon = IconMaterialInfo,

    IconProps,
    IconButtonProps,
    NameProps,
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

      name={(
        <Line
          gap={1}

          fullWidth

          className={classNames([
            staticClassName('Info', theme) && [
              'amaui-Info-root'
            ],

            className,
            classes.root
          ])}
        >
          <Line
            gap={1}

            fullWidth

            {...ContainerProps}
          >
            <Type
              version='l2'

              {...NameProps}
            >
              {name}
            </Type>

            {children}
          </Line>
        </Line>
      )}

      {...other}
    >
      <span>
        <Tooltip
          name='Info'

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

Info.displayName = 'amaui-Info';

export default Info;
