import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFilled'

      short_name='Devices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-120h80v-520h680v80H240v440h240v120H80Zm480 0v-480h320v480H560Z"/>
    </Icon>
  );
});

IconMaterialDevicesFilled.displayName = 'OnesyIconMaterialDevicesFilled';

export default IconMaterialDevicesFilled;
