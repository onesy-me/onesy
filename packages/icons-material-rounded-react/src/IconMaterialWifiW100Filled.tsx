import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiW100Filled'

      short_name='Wifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-150q-21 0-35.5-14.5T430-200q0-21 14.5-35.5T480-250q21 0 35.5 14.5T530-200q0 21-14.5 35.5T480-150Zm0-330q69 0 129.5 24T718-389q7 6 7.5 14.5T720-360q-6 6-14.5 5.5T690-361q-42-37-96-58t-114-21q-60 0-114 21t-96 58q-7 6-15.5 6.5T240-360q-6-6-5.5-14.5T242-389q48-43 108.5-67T480-480Zm0-240q121 0 224.5 42.5T888-560q7 6 7.5 15t-5.5 15q-7 7-16 5t-17-9q-75-69-171.5-107.5T480-680q-109 0-205.5 38.5T103-534q-8 7-17 9t-16-5q-6-6-5.5-15t7.5-15q80-75 183.5-117.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialWifiW100Filled.displayName = 'OnesyIconMaterialWifiW100Filled';

export default IconMaterialWifiW100Filled;
