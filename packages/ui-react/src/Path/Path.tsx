import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import { staticClassName } from '../utils';
import { IBaseElement } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-Path' });

export type IPath = IBaseElement & {
  value?: any;
};

const Path: React.FC<IPath> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyPath?.props?.default, ...props_ };

  const {
    value,

    Component = 'path',

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Path', theme) && [
          'onesy-Path-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

Path.displayName = 'onesy-Path';

export default Path;
