import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceThermostatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceThermostatW100Filled'

      short_name='DeviceThermostat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-62 0-105-43t-43-105q0-42 21.5-77t58.5-55v-348q0-29 19.5-48.5T480-828q29 0 48.5 19.5T548-760v348q37 20 58.5 55t21.5 77q0 62-43 105t-105 43Zm-40-368h80v-66h-40v-28h40v-92h-40v-28h40v-46q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v260Z"/>
    </Icon>
  );
});

IconMaterialDeviceThermostatW100Filled.displayName = 'OnesyIconMaterialDeviceThermostatW100Filled';

export default IconMaterialDeviceThermostatW100Filled;
