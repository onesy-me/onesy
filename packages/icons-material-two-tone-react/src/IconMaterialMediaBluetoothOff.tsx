import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaBluetoothOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOff'

      short_name='MediaBluetoothOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M9,6.17V3h6v4h-4v1.17L9,6.17z M19.42,15L22,17.57l-0.8,0.8l-6.78-6.78l0.8-0.8l2.75,2.75V9h0.6L22,12.43L19.42,15z M19.17,13.55l1.13-1.13l-1.13-1.13V13.55z M17.21,17.21l3.98,3.98l-1.41,1.41l-3.98-3.98l-0.58,0.58l-0.85-0.85l0.58-0.58 L11,13.83V17c0,2.21-1.78,4-3.99,4S3,19.21,3,17s1.79-4,4.01-4c0.73,0,1.41,0.21,2,0.55v-1.72L1.39,4.22L2.8,2.81l13.56,13.56 L17.21,17.21z"/></g></g>
    </Icon>
  );
});

IconMaterialMediaBluetoothOff.displayName = 'OnesyIconMaterialMediaBluetoothOff';

export default IconMaterialMediaBluetoothOff;
