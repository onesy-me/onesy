import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconMaterialMoreVert from '@amaui/icons-material-rounded-react/IconMaterialMoreVertW100';

import IconButtonElement from '../IconButton';
import MenuElement, { IMenu } from '../Menu/Menu';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  iconButton: {
    flex: '0 0 auto'
  }
}), { name: 'amaui-MoreOptions' });

export interface IMoreOptions extends IMenu {
  Icon?: any;

  IconButtonProps?: IPropsAny;
}

const MoreOptions: React.FC<IMoreOptions> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiMoreOptions?.props?.default, ...props_ }), [props_]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    menuItems,

    Icon: Icon_ = IconMaterialMoreVert,

    IconButtonProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const onClick = React.useCallback((event: MouseEvent) => {
    //  event.stopPropagation();
  }, []);

  return (
    <Menu
      alignment='center'

      onClick={onClick}

      menuItems={menuItems}

      {...other}

      ListProps={{
        color: 'themed',
        size: 'small',

        ...other?.ListProps
      }}

      className={classNames([
        staticClassName('MoreOptions', theme) && [
          'amaui-MoreOptions-root'
        ],

        className,
        classes.root
      ])}
    >
      <IconButton
        color='inherit'

        size='small'

        disabled={!menuItems?.length}

        onClick={onClick}

        {...IconButtonProps}

        className={classNames([
          staticClassName('MoreOptions', theme) && [
            'amaui-MoreOptions-icon-button'
          ],

          IconButtonProps?.className,
          classes.iconButton
        ])}
      >
        <Icon_ />
      </IconButton>
    </Menu>
  );
});

MoreOptions.displayName = 'amaui-MoreOptions';

export default MoreOptions;
