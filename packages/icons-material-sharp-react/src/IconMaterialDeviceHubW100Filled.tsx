import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceHubW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubW100Filled'

      short_name='DeviceHub'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-148h128l166-166v-112q-34-8-57-33.5T386-692q0-39 27.5-66.5T480-786q39 0 66.5 27.5T574-692q0 35-23 60.5T494-598v112l166 166h128v148H640v-128L480-460 320-300v128H172Z"/>
    </Icon>
  );
});

IconMaterialDeviceHubW100Filled.displayName = 'OnesyIconMaterialDeviceHubW100Filled';

export default IconMaterialDeviceHubW100Filled;
