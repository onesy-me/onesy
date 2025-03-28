import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiPasswordW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiPasswordW100Filled'

      short_name='WifiPassword'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M768-14q-14 0-25-11t-11-25v-104q0-14 11-25t25-11h5v-40q0-29 19.5-48.5T841-298q29 0 48.5 19.5T909-230v40h5q14 0 24 11t10 25v104q0 14-11 25t-25 11H768Zm33-176h80v-40q0-17-11.5-28.5T841-270q-17 0-28.5 11.5T801-230v40Zm-321 40q-21 0-35.5-14.5T430-200q0-21 14.5-35.5T480-250q21 0 35.5 14.5T530-200q0 21-14.5 35.5T480-150Zm0-330q69 0 129.5 24T718-389q7 6 7.5 14.5T720-360q-6 6-14.5 5.5T690-361q-42-37-96-58t-114-21q-60 0-114 21t-96 58q-7 6-15.5 6.5T240-360q-6-6-5.5-14.5T242-389q48-43 108.5-67T480-480Zm0-240q121 0 224.5 42.5T888-560q7 6 7.5 15t-5.5 15q-7 7-16 5t-17-9q-75-69-171.5-107.5T480-680q-109 0-205.5 38.5T103-534q-8 7-17 9t-16-5q-6-6-5.5-15t7.5-15q80-75 183.5-117.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialWifiPasswordW100Filled.displayName = 'OnesyIconMaterialWifiPasswordW100Filled';

export default IconMaterialWifiPasswordW100Filled;
