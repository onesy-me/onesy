import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import { ILine, TLineAlign } from '../Line/Line';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    // overflowY: 'auto',
    // // important
    // // using flex: 1 1 auto, with overflowY: auto
    // // it will properly make it overflow auto
    // height: '0px'
  }
}), { name: 'onesy-ModalMain' });

export interface IModalMain extends ILine {

}

const ModalMain: React.FC<IModalMain> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyModalMain?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const {
    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  let align: TLineAlign = 'flex-start';

  if (React.Children.toArray(children).length > 1) align = 'center';

  return (
    <Line
      ref={ref}

      align={align}

      className={classNames([
        staticClassName('ModalMain', theme) && [
          'onesy-ModalMain-root'
        ],

        className,
        classes.root
      ])}

      flex

      fullWidth

      {...other}
    >
      {children}
    </Line>
  );
});

ModalMain.displayName = 'onesy-ModalMain';

export default ModalMain;
