import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetooth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bluetooth'

      short_name='Bluetooth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
    </Icon>
  );
});

IconMaterialBluetooth.displayName = 'OnesyIconMaterialBluetooth';

export default IconMaterialBluetooth;
