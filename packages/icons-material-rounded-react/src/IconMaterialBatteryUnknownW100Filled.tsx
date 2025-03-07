import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryUnknownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknownW100Filled'

      short_name='BatteryUnknown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680.41-332q-9.41 0-17.91 4.5T649-315q-5 6-11.5 8t-13.56-1Q616-311 613-318q-3-7 1.1-13.37 10.65-16.72 28.28-26.68Q660-368 680.22-368 709-368 731-348.86q22 19.15 22 47.86 0 8-2 16t-6.94 14.67Q735-257 723.5-247.5 712-238 704-224q-2 3-4 11-1.6 7.92-6.8 13.46Q688-194 680-194q-8 0-14-5.68t-5-13.26q1-6.06 2-12.06 1-6 4-11 8-13.66 20.4-23.3 12.4-9.63 21.2-22.49Q711-285 715-300.4q0-13.77-10.63-22.69-10.62-8.91-23.96-8.91ZM680-112q-11.12 0-19.06-7.77Q653-127.55 653-139q0-10.71 7.92-18.35 7.91-7.65 19-7.65 11.08 0 19.08 7.71 8 7.71 8 18.5T699.23-120q-7.78 8-19.23 8Zm-324-20q-12.75 0-21.37-8.63Q326-149.25 326-162v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-23q0-12.75 8.63-21.38Q433.25-828 446-828h68q12.75 0 21.38 8.62Q544-810.75 544-798v23h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v258q0 8-4.5 13.5T617-466q-35 9-65 28t-52.87 45.6Q473-362 458.5-324 444-286 444-243q0 20.36 3 39.36t9 36.64q5 13-2.5 24T433-132h-77Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknownW100Filled.displayName = 'OnesyIconMaterialBatteryUnknownW100Filled';

export default IconMaterialBatteryUnknownW100Filled;
