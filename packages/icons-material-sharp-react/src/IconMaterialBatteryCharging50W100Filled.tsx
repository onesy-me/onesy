import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging50W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging50W100Filled'

      short_name='BatteryCharging50'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M664-107v-101h-50l82-165v101h50l-82 165Zm-338-25v-643h90v-53h128v53h90v305q-8 2-14.5 3.5T606-463v-285H354v358h143q-24.79 29.73-38.9 67.37Q444-285 444-243q0 30 7 58t21 53H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging50W100Filled.displayName = 'OnesyIconMaterialBatteryCharging50W100Filled';

export default IconMaterialBatteryCharging50W100Filled;
