import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceHubFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubFilled'

      short_name='DeviceHub'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-120q0-17 11.5-28.5T160-320h120l160-160v-128q-36-13-58-43.5T360-720q0-50 35-85t85-35q50 0 85 35t35 85q0 38-22 68.5T520-608v128l160 160h120q17 0 28.5 11.5T840-280v120q0 17-11.5 28.5T800-120H680q-17 0-28.5-11.5T640-160v-82L480-402 320-242v82q0 17-11.5 28.5T280-120H160q-17 0-28.5-11.5T120-160Z"/>
    </Icon>
  );
});

IconMaterialDeviceHubFilled.displayName = 'OnesyIconMaterialDeviceHubFilled';

export default IconMaterialDeviceHubFilled;
