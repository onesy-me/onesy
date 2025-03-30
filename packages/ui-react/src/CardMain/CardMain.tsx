import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IVersion, IElevation } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    padding: theme.methods.space.value(3, 'px')
  }
}), { name: 'onesy-CardMain' });

export type ICardMain = ILine & {
  version?: IVersion;
  elevation?: IElevation;
};

const CardMain: React.FC<ICardMain> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyCardMain?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const {
    tonal = true,
    color,
    version,
    elevation,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Line
      ref={ref}

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('CardMain', theme) && [
          `onesy-CardMain-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Line>
  );
});

CardMain.displayName = 'onesy-CardMain';

export default CardMain;
