import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ButtonElement from '../Button';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-Fab' });

export type IFab = IButton & {

};

const Fab: React.FC<IFab> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyFab?.props?.default, ...props_ };

  const Button = theme?.elements?.Button || ButtonElement;

  const {
    tonal = 'primary',

    version = 'filled',

    className
  } = props;

  const { classes } = useStyle();

  return (
    <Button
      {...props}

      className={classNames([
        staticClassName('Fab', theme) && [
          'onesy-Fab-root'
        ],

        className,
        classes.root
      ])}

      version={version}

      tonal={tonal}

      fab
    />
  );
};

Fab.displayName = 'onesy-Fab';

export default Fab;
