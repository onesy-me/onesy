import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryChargingFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryChargingFullW100Filled'

      short_name='BatteryChargingFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M664-208h-26q-8 0-12.5-7t-.5-14.99l57.14-114.22Q685-349 690.5-348t5.5 7.25V-272h26q8 0 12.5 7t.5 14.99l-57.14 114.22Q675-131 669.5-132t-5.5-7.25V-208Zm-308 76q-12.75 0-21.37-8.63Q326-149.25 326-162v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-23q0-12.75 8.63-21.38Q433.25-828 446-828h68q12.75 0 21.38 8.62Q544-810.75 544-798v23h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v258q0 7.74-4.5 13.37Q625-468 617-466q-35 9-65 28t-52.87 45.6Q473-362 458.5-324 444-286 444-243q0 20.36 3 39.36t9 36.64q5 13-2.5 24T433-132h-77Z"/>
    </Icon>
  );
});

IconMaterialBatteryChargingFullW100Filled.displayName = 'OnesyIconMaterialBatteryChargingFullW100Filled';

export default IconMaterialBatteryChargingFullW100Filled;
