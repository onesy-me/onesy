import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import MenuElement from '../Menu';
import TooltipElement from '../Tooltip';
import TypeElement from '../Type';
import IconElement from '../Icon';
import { IMenu } from '../Menu/Menu';
import { staticClassName } from '../utils';

const IconMaterialInfo = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Info'

      short_name='Info'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4.025q0-.425-.287-.7Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4.025q0 .425.288.7.287.275.712.275Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z" />
    </IconElement>
  );
});

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
