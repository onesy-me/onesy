import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging20W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging20W100'

      short_name='BatteryCharging20'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M664-107v-101h-50l82-165v101h50l-82 165Zm-338-25v-643h90v-53h128v53h90v305q-8 2-14.5 3.5T606-463v-285H354v505h90q0 30 7 58t21 53H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging20W100.displayName = 'OnesyIconMaterialBatteryCharging20W100';

export default IconMaterialBatteryCharging20W100;
