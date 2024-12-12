import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryChargingFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryChargingFullW100'

      short_name='BatteryChargingFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M664-107v-101h-50l82-165v101h50l-82 165Zm-310-53Zm-28 28v-643h90v-53h128v53h90v305q-8 2-14.5 3.5T606-463v-285H354v588h105q3 8 6 14.5t7 13.5H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryChargingFullW100.displayName = 'OnesyIconMaterialBatteryChargingFullW100';

export default IconMaterialBatteryChargingFullW100;
