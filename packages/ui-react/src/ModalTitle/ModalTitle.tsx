import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import TypeElement from '../Type';
import { IType } from '../Type/Type';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'onesy-ModalTitle' });

export type IModalTitle = IType & {

};

const ModalTitle: React.FC<IModalTitle> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyModalTitle?.props?.default, ...props_ };

  const Type = theme?.elements?.Type || TypeElement;

  const {
    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Type
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
};

ModalTitle.displayName = 'onesy-ModalTitle';

export default ModalTitle;
