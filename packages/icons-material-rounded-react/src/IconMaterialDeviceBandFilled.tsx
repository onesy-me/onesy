import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceBandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceBandFilled'

      short_name='DeviceBand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80q-33 0-56.5-23.5T320-160v-440q-17 0-28.5-11.5T280-640v-40q0-17 11.5-28.5T320-720v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80q17 0 28.5 11.5T680-680v40q0 17-11.5 28.5T640-600v440q0 33-23.5 56.5T560-80H400Z"/>
    </Icon>
  );
});

IconMaterialDeviceBandFilled.displayName = 'OnesyIconMaterialDeviceBandFilled';

export default IconMaterialDeviceBandFilled;
