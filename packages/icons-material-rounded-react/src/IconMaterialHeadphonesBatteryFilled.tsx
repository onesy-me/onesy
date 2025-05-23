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
      <path d="M200-240h-40q-33 0-56.5-23.5T80-320v-160q0-100 70-170t170-70q100 0 170 70t70 170v160q0 33-23.5 56.5T480-240h-40q-17 0-28.5-11.5T400-280v-120q0-17 11.5-28.5T440-440h60v-40q0-75-52.5-127.5T320-660q-75 0-127.5 52.5T140-480v40h60q17 0 28.5 11.5T240-400v120q0 17-11.5 28.5T200-240Zm520-440v-20q0-8 6-14t14-6h40q8 0 14 6t6 14v20h40q17 0 28.5 11.5T880-640v360q0 17-11.5 28.5T840-240H680q-17 0-28.5-11.5T640-280v-360q0-17 11.5-28.5T680-680h40Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatteryFilled.displayName = 'OnesyIconMaterialHeadphonesBatteryFilled';

export default IconMaterialHeadphonesBatteryFilled;
