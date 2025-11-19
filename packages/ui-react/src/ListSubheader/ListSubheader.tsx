import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ListItemElement from '../ListItem';
import { IListItem } from '../ListItem/ListItem';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    top: '0',
    position: 'sticky',
    zIndex: '1',
    userSelect: 'none',

    '& .onesy-Type-root': {
      fontWeight: 'bold',
    }
  }
}), { name: 'onesy-ListSubheader' });

export type IListSubheader = IListItem & {

};

const ListSubheader: React.FC<IListSubheader> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyListSubheader?.props?.default, ...props_ };

  const ListItem = theme?.elements?.ListItem || ListItemElement;

  const {
    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <ListItem
      ref={ref}

      secondary={children}

      className={classNames([
        staticClassName('ListSubheader', theme) && [
          'onesy-ListSubheader-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

ListSubheader.displayName = 'onesy-ListSubheader';

export default ListSubheader;
