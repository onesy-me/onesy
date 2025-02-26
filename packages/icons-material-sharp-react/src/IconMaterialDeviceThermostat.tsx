import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceThermostat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceThermostat'

      short_name='DeviceThermostat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z"/>
    </Icon>
  );
});

IconMaterialDeviceThermostat.displayName = 'OnesyIconMaterialDeviceThermostat';

export default IconMaterialDeviceThermostat;
