import React from 'react';

import { useOnesyTheme } from '@onesy/style-react';

import { IIcon } from '../Icon/Icon';

export type IModalIcon = IIcon & {

};

const ModalIcon: React.FC<IModalIcon> = React.forwardRef((props_, ref: any) => {
  const theme = useOnesyTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.onesyModalIcon?.props?.default, ...props_ }), [props_]);

  const {
    className,

    children,

    ...other
  } = props;

  return (
    React.cloneElement(children as any, {
      ref,

      size: 'regular',

      ...other
    })
  );
});

ModalIcon.displayName = 'onesy-ModalIcon';

export default ModalIcon;
