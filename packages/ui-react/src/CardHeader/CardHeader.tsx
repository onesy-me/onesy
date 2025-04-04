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
}), { name: 'onesy-CardHeader' });

export type ICardHeader = ILine & {
  version?: IVersion;
  elevation?: IElevation;
};

const CardHeader: React.FC<ICardHeader> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyCardHeader?.props?.default, ...props_ }), [props_]);

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

      direction='row'

      align='center'

      justify='center'

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('CardHeader', theme) && [
          `onesy-CardHeader-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {React.cloneElement(children as any, {
        tonal: (children as any).props.tonal !== undefined ? (children as any).props.tonal : tonal,

        version: (children as any).props.version !== undefined ? (children as any).props.version : version,

        elevation: (children as any).props.elevation !== undefined ? (children as any).props.elevation : elevation,

        color: (children as any).props.color !== undefined ? (children as any).props.color : color
      })}
    </Line>
  );
});

CardHeader.displayName = 'onesy-CardHeader';

export default CardHeader;
