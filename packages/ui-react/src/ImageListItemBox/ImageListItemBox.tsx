import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ListItemElement from '../ListItem';
import { IListItem } from '../ListItem/ListItem';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  position_top: {
    position: 'absolute',
    top: '0',
    insetInline: '0',
    borderRadius: `0 0 ${theme.shape.radius.unit * 3}px ${theme.shape.radius.unit * 3}px`
  },

  position_bottom: {
    position: 'absolute',
    bottom: '0',
    insetInline: '0',
    borderRadius: `${theme.shape.radius.unit * 3}px ${theme.shape.radius.unit * 3}px 0 0`
  }
}), { name: 'onesy-ImageListItemBox' });

export type IImageListItemBox = IListItem & {
  position?: 'top' | 'bottom';
  backgroundOpacity?: number;
};

const ImageListItemBox: React.FC<IImageListItemBox> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyImageListItemBox?.props?.default, ...props_ };

  const ListItem = theme?.elements?.ListItem || ListItemElement;

  const {
    position,
    backgroundOpacity = 0.74,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <ListItem
      backgroundOpacity={backgroundOpacity}

      Component={Component}

      className={classNames([
        staticClassName('ImageListItemBox', theme) && [
          'onesy-ImageListItemBox-root'
        ],

        className,
        classes.root,
        position && classes[`position_${position}`]
      ])}

      {...other}
    >
      {children}
    </ListItem>
  );
};

ImageListItemBox.displayName = 'onesy-ImageListItemBox';

export default ImageListItemBox;
