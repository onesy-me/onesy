import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryErrorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryErrorW100'

      short_name='BatteryError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-132q-12.75 0-21.37-8.63Q326-149.25 326-162v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-23q0-12.75 8.63-21.38Q433.25-828 446-828h68q12.75 0 21.38 8.62Q544-810.75 544-798v23h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v301q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-304H354v588h155q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H356Zm-2-28Zm371-55-75 74q-4 4-9 3.5t-9.17-4.5q-3.83-3.67-3.83-9.33 0-5.67 4-9.67l74-74-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.67-4 5.66 0 9.33 4l74 75 75-75q4-4 9.5-3.5t9.67 4.67Q823-324 823-319t-4 9l-74 75 74 75q4 4 3.5 9.5t-4.67 9.67Q814-137 809-137t-9-4l-75-74Z"/>
    </Icon>
  );
});

IconMaterialBatteryErrorW100.displayName = 'OnesyIconMaterialBatteryErrorW100';

export default IconMaterialBatteryErrorW100;
