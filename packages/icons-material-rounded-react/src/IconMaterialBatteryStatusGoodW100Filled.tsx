import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryStatusGoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryStatusGoodW100Filled'

      short_name='BatteryStatusGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m638-189 131-132q4.09-4 9.55-4 5.45 0 10.45 4 5 4 4.5 10t-4.5 10L659-171q-9.07 9-21.53 9-12.47 0-21.47-9l-45-45q-4-4-4.5-9.5T571-236q4-4 9.82-3.83 5.82.16 10.18 3.83l47 47Zm-282 57q-12.75 0-21.37-8.63Q326-149.25 326-162v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-23q0-12.75 8.63-21.38Q433.25-828 446-828h68q12.75 0 21.38 8.62Q544-810.75 544-798v23h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v258q0 8-4.5 13.5T617-466q-35 9-65 28t-52.87 45.6Q473-362 458.5-324 444-286 444-243q0 20.36 3 39.36t9 36.64q5 13-2.5 24T433-132h-77Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGoodW100Filled.displayName = 'OnesyIconMaterialBatteryStatusGoodW100Filled';

export default IconMaterialBatteryStatusGoodW100Filled;
