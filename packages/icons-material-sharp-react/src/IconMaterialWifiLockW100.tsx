import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLockW100'

      short_name='WifiLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M612-194v-176h41v-40q0-29 19.5-48.5T721-478q29 0 48.5 19.5T789-410v40h39v176H612Zm69-176h80v-40q0-17-11.5-28.5T721-450q-17 0-28.5 11.5T681-410v40ZM480-194 74-600q85-73 189.5-110.5T480-748q112 0 216.5 37.5T886-600l-77 77q-5-4.91-10-10t-10-10l55-55q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 65-65 10 10 10 10-85 85Zm0-283Z"/>
    </Icon>
  );
});

IconMaterialWifiLockW100.displayName = 'OnesyIconMaterialWifiLockW100';

export default IconMaterialWifiLockW100;
