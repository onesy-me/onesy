import React from 'react';

import { classNames, style as styleMethod, useOnesyTheme } from '@onesy/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    paddingTop: theme.methods.space.value('md', 'px')
  }
}), { name: 'onesy-ModalFooter' });

export type IModalFooter = ILine & {

};

const ModalFooter: React.FC<IModalFooter> = props_ => {
  const theme = useOnesyTheme();

  const props = { ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyModalFooter?.props?.default, ...props_ };

  const Line = theme?.elements?.Line || LineElement;

  const {
    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Line
      direction='row'

      align='center'

      justify='space-between'

      fullWidth

      className={classNames([
        staticClassName('ModalFooter', theme) && [
          'onesy-ModalFooter-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Line>
  );
};

ModalFooter.displayName = 'onesy-ModalFooter';

export default ModalFooter;
