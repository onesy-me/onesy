import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLockW100Filled'

      short_name='WifiLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M612-194v-176h41v-40q0-29 19.5-48.5T721-478q29 0 48.5 19.5T789-410v40h39v176H612Zm69-176h80v-40q0-17-11.5-28.5T721-450q-17 0-28.5 11.5T681-410v40ZM480-194 74-600q85-73 189.5-110.5T480-748q112 0 216.5 37.5T886-600l-65 65q-18-6-36.88-9-18.87-3-38.12-3-95.6 0-162.8 67.2Q516-412.6 516-317q0 19.25 3 38.12 3 18.88 9 36.88l-48 48Z"/>
    </Icon>
  );
});

IconMaterialWifiLockW100Filled.displayName = 'OnesyIconMaterialWifiLockW100Filled';

export default IconMaterialWifiLockW100Filled;
