import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging30W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging30W100Filled'

      short_name='BatteryCharging30'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-132q-12.75 0-21.37-8.63Q326-149.25 326-162v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-23q0-12.75 8.63-21.38Q433.25-828 446-828h68q12.75 0 21.38 8.62Q544-810.75 544-798v23h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v254q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-257H354v438h65q13.5 0 21.75 10t6.25 24q-2 8-2.5 16.5T444-243q0 20.36 3 39.36t9 36.64q5 13-2.5 24T433-132h-77Zm308-76h-26q-8 0-12.5-7t-.5-14.99l57.14-114.22Q685-349 690.5-348t5.5 7.25V-272h26q8 0 12.5 7t.5 14.99l-57.14 114.22Q675-131 669.5-132t-5.5-7.25V-208Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging30W100Filled.displayName = 'OnesyIconMaterialBatteryCharging30W100Filled';

export default IconMaterialBatteryCharging30W100Filled;
