import React from 'react';

import { TValue } from '@onesy/style';
import { style as styleMethod, classNames, useOnesyTheme, className as classNameMethod } from '@onesy/style-react';

import { staticClassName } from '../utils';
import { IBaseElement } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-Box' });

export type IBox = IBaseElement & {
  styles?: string | TValue;
};

const Box: React.FC<IBox> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyBox?.props?.default, ...props_ };

  const {
    styles,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Component
      ref={ref}

      className={classNameMethod(styles as any, props, classNames([
        staticClassName('Box', theme) && [
          'onesy-Box-root'
        ],

        className,
        classes.root
      ]), { name: 'onesy-BoxClassNameRoot' })}

      {...other}
    >
      {children}
    </Component>
  );
});

Box.displayName = 'onesy-Box';

export default Box;
