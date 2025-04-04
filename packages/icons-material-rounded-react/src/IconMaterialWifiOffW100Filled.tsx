import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiOffW100Filled'

      short_name='WifiOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-130 480-440q-59 0-114.5 21T269-361q-7 6-15 6.5t-14-5.5q-6-6-5-15t8-15q40-35 91.5-59.5T442-478L278-642q-42 15-89.5 44.5T101-532q-7 6-15.5 7T71-530q-6-6-5-14.5t7-14.5q40-38 85.5-68t87.5-47l-84-84q-4-4-4.5-9.5T162-778q5-5 10-5t10 5l627 627q5 5 5 10.5t-5 10.5q-5 4-10.5 4.5T788-130Zm-308-20q-21 0-35.5-14.5T430-200q0-21 14.5-35.5T480-250q21 0 35.5 14.5T530-200q0 21-14.5 35.5T480-150Zm245-217q-4 4-9 4t-9-4l-9-9-9-9-16-16q-7-7-1.5-14t13.5-2q10 7 19.5 14.5T724-386q5 4 5 9.5t-4 9.5Zm165-163q-7 7-16 5t-17-9q-75-69-171.5-107.5T480-680q-21 0-42 1.5t-38 4.5q-8 2-15-3.5t-9-13.5q-2-8 3.5-15t13.5-9q17-2 38.5-3.5T480-720q119 0 222.5 42.5T887-560q7 6 8 15t-5 15Z"/>
    </Icon>
  );
});

IconMaterialWifiOffW100Filled.displayName = 'OnesyIconMaterialWifiOffW100Filled';

export default IconMaterialWifiOffW100Filled;
