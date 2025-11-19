import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import IconMaterialMoreVert from '@onesy/icons-material-rounded-react/IconMaterialMoreVertW100';

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
}), { name: 'onesy-MoreOptions' });

export type IMoreOptions = IMenu & {
  Icon?: any;

  IconButtonProps?: IPropsAny;
};

const MoreOptions: React.FC<IMoreOptions> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyMoreOptions?.props?.default, ...props_ };

  const Menu = theme?.elements?.Menu || MenuElement;

  const IconButton = theme?.elements?.IconButton || IconButtonElement;

  const {
    menuItems,

    Icon: Icon_ = IconMaterialMoreVert,

    IconButtonProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Menu
      alignment='center'

      menuItems={menuItems}

      {...other}

      ListProps={{
        color: 'themed',
        size: 'small',

        ...other?.ListProps
      }}

      className={classNames([
        staticClassName('MoreOptions', theme) && [
          'onesy-MoreOptions-root'
        ],

        className,
        classes.root
      ])}
    >
      <IconButton
        color='inherit'

        size='small'

        disabled={!menuItems?.length}

        {...IconButtonProps}

        className={classNames([
          staticClassName('MoreOptions', theme) && [
            'onesy-MoreOptions-icon-button'
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

MoreOptions.displayName = 'onesy-MoreOptions';

export default MoreOptions;
