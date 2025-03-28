import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceHubW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubW100'

      short_name='DeviceHub'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-201.6v-88.82q0-12.58 8.63-21.08 8.62-8.5 21.37-8.5h98l166-166v-112q-34-8-57-33.5T386-692q0-39.17 27.38-66.58Q440.76-786 479.88-786q39.12 0 66.62 27.42Q574-731.17 574-692q0 35-23 60.5T494-598v112l166 166h98q12.75 0 21.38 8.51 8.62 8.51 8.62 21.09v88.82q0 12.58-8.51 21.08-8.51 8.5-21.09 8.5h-88.82q-12.58 0-21.08-8.63-8.5-8.62-8.5-21.37v-98L480-460 320-300v98q0 12.75-8.51 21.37-8.51 8.63-21.09 8.63h-88.82q-12.58 0-21.08-8.51-8.5-8.51-8.5-21.09Z"/>
    </Icon>
  );
});

IconMaterialDeviceHubW100.displayName = 'OnesyIconMaterialDeviceHubW100';

export default IconMaterialDeviceHubW100;
