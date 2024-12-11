import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import ButtonElement from '../Button';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-Fab' });

export interface IFab extends IButton {

}

const Fab: React.FC<IFab> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyFab?.props?.default, ...props_ }), [props_]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const {
    tonal = 'primary',

    version = 'filled',

    className
  } = props;

  const { classes } = useStyle();

  return (
    <Button
      ref={ref}

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
});

Fab.displayName = 'onesy-Fab';

export default Fab;
