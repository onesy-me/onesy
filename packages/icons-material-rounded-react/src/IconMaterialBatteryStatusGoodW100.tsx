import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryStatusGoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryStatusGoodW100'

      short_name='BatteryStatusGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m638-189 131-132q4.09-4 9.55-4 5.45 0 10.45 4 5 4 4.5 10t-4.5 10L659-171q-9.07 9-21.53 9-12.47 0-21.47-9l-45-45q-4-4-4.5-9.5T571-236q4-4 9.82-3.83 5.82.16 10.18 3.83l47 47Zm-284 29Zm2 28q-12.75 0-21.37-8.63Q326-149.25 326-162v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-23q0-12.75 8.63-21.38Q433.25-828 446-828h68q12.75 0 21.38 8.62Q544-810.75 544-798v23h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v254q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-257H354v588h104q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H356Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGoodW100.displayName = 'OnesyIconMaterialBatteryStatusGoodW100';

export default IconMaterialBatteryStatusGoodW100;
