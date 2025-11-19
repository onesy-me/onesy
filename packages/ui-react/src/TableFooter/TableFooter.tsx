import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import SurfaceElement from '../Surface';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  size_small: {
    padding: theme.methods.space.value(2, 'px')
  },

  size_regular: {
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(2, 'px')}`
  },

  size_large: {
    padding: `${theme.methods.space.value(4, 'px')} ${theme.methods.space.value(3, 'px')}`
  }
}), { name: 'onesy-TableFooter' });

export type ITableFooter = ISurface & {

};

const TableFooter: React.FC<ITableFooter> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTableFooter?.props?.default, ...props_ };

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Surface
      tonal={tonal}

      color={color}

      Component={Component}

      className={classNames([
        staticClassName('TableFooter', theme) && [
          `onesy-TableFooter-root`,
          `onesy-TableFooter-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      {...other}
    >
      {children}
    </Surface>
  );
};

TableFooter.displayName = 'onesy-TableFooter';

export default TableFooter;
