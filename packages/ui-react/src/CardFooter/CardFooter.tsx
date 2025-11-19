import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElevation, IVersion } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    padding: theme.methods.space.value(3, 'px')
  }
}), { name: 'onesy-CardFooter' });

export type ICardFooter = ILine & {
  version?: IVersion;
  elevation?: IElevation;
};

const CardFooter: React.FC<ICardFooter> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyCardFooter?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

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

      gap={1}

      direction='row'

      wrap='wrap'

      align='center'

      justify='flex-end'

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('CardFooter', theme) && [
          `onesy-CardFooter-root`
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

CardFooter.displayName = 'onesy-CardFooter';

export default CardFooter;
