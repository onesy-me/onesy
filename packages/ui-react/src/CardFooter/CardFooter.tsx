import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IColor, IElevation, ITonal, IVersion } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    padding: theme.methods.space.value(3, 'px')
  }
}), { name: 'onesy-CardFooter' });

export interface ICardFooter extends ILine {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;
  elevation?: IElevation;
}

const CardFooter: React.FC<ICardFooter> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyCardFooter?.props?.default, ...props_ }), [props_]);

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
