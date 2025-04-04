import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TypeElement from '../Type';
import { IType } from '../Type/Type';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-ModalText' });

export type IModalText = IType & {

};

const ModalText: React.FC<IModalText> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyModalText?.props?.default, ...props_ }), [props_]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Type
      ref={ref}

      version='b2'

      align='center'

      id='onesy-modal-text'

      className={classNames([
        staticClassName('ModalText', theme) && [
          'onesy-ModalText-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Type>
  );
});

ModalText.displayName = 'onesy-ModalText';

export default ModalText;
