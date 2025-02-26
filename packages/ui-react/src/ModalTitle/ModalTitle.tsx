import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TypeElement from '../Type';
import { IType } from '../Type/Type';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-ModalTitle' });

export interface IModalTitle extends IType {

}

const ModalTitle: React.FC<IModalTitle> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyModalTitle?.props?.default, ...props_ }), [props_]);

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

      version='t2'

      align='center'

      id='onesy-modal-title'

      className={classNames([
        staticClassName('ModalTitle', theme) && [
          'onesy-ModalTitle-root'
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

ModalTitle.displayName = 'onesy-ModalTitle';

export default ModalTitle;
