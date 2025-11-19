import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
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
}), { name: 'onesy-TableHeader' });

export type ITableHeader = ISurface & {

};

const TableHeader: React.FC<ITableHeader> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyTableHeader?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const Surface = theme?.elements?.Surface || SurfaceElement;

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    Component = Line,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Component
      tonal={tonal}

      color={color}

      Component={Surface as any}

      className={classNames([
        staticClassName('TableHeader', theme) && [
          `onesy-TableHeader-root`,
          `onesy-TableHeader-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      {...other}
    >
      {children}
    </Component>
  );
};

TableHeader.displayName = 'onesy-TableHeader';

export default TableHeader;
