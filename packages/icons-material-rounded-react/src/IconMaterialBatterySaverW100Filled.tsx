import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatterySaverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverW100Filled'

      short_name='BatterySaver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-232h-86q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h86v-86q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v86h86q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-86v86q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-86ZM356-132q-12.75 0-21.37-8.63Q326-149.25 326-162v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-23q0-12.75 8.63-21.38Q433.25-828 446-828h68q12.75 0 21.38 8.62Q544-810.75 544-798v23h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v258q0 8-4.5 13.5T617-466q-35 9-65 28t-52.87 45.6Q473-362 458.5-324 444-286 444-243q0 20.36 3 39.36t9 36.64q5 13-2.5 24T433-132h-77Z"/>
    </Icon>
  );
});

IconMaterialBatterySaverW100Filled.displayName = 'OnesyIconMaterialBatterySaverW100Filled';

export default IconMaterialBatterySaverW100Filled;
