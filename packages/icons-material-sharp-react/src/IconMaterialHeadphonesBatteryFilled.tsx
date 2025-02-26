import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadphonesBatteryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatteryFilled'

      short_name='HeadphonesBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-240q0-100 70-170t170-70q100 0 170 70t70 170v240H400v-200h100v-40q0-75-52.5-127.5T320-660q-75 0-127.5 52.5T140-480v40h100v200H80Zm560 0v-440h80v-40h80v40h80v440H640Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatteryFilled.displayName = 'OnesyIconMaterialHeadphonesBatteryFilled';

export default IconMaterialHeadphonesBatteryFilled;
