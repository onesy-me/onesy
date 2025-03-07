import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiW100'

      short_name='NetworkWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M174-540q67-48 145-74t161-26q83 0 161 26t145 74l58-58q-79-60-172-91t-192-31q-99 0-192 31t-172 91l58 58Zm285 325L99-575q-5-5-7-10.67-2-5.66-2-11.33 0-6.8 3-13t9-11q85-63 178.5-95T480-748q106 0 199.5 32T858-621q6 4.8 9 11t3 13q0 6-2 11.5t-7 10.5L501-215q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiW100.displayName = 'OnesyIconMaterialNetworkWifiW100';

export default IconMaterialNetworkWifiW100;
