import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement, { ILine, TLineAlign } from '../Line/Line';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    paddingBottom: theme.methods.space.value(2, 'px')
  }
}), { name: 'onesy-ModalHeader' });

export interface IModalHeader extends ILine {
  align?: TLineAlign;
}

const ModalHeader: React.FC<IModalHeader> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyModalHeader?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const {
    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Line
      ref={ref}

      gap={2}

      direction='column'

      align='center'

      justify='center'

      fullWidth

      className={classNames([
        staticClassName('ModalHeader', theme) && [
          'onesy-ModalHeader-root'
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

ModalHeader.displayName = 'onesy-ModalHeader';

export default ModalHeader;
