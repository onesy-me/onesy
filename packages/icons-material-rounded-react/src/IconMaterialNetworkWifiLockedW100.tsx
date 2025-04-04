import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkWifiLockedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiLockedW100'

      short_name='NetworkWifiLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-720q-99 0-192 31t-172 91l58 58q67-48 145-74t161-26q83 0 161 26t145 74l58-58q-79-60-172-91t-192-31Zm-4 512q-5 0-9.09-1.54T459-215L99-575q-5-5-7-10.54-2-5.55-2-11.46 0-6.59 3-12.8 3-6.2 9-11.2 83-61 179-94t199-33q103 0 199 33t179 94q6 5 9 11.15 3 6.16 3 12.7 0 6.15-2 11.65t-7 10.5l-36 36q-5.38 5.09-12.69 6.55Q805-531 798-534q-19.24-8.08-39.49-11.54Q738.25-549 718-549q-89 0-154.5 64T476-319q0 12.06 1.5 23.03T484-274q5 11 10 21.97 5 10.97 5 23.03 0 9.77-6.76 15.38Q485.47-208 476-208Zm172.28 14q-15.28 0-25.78-10.35Q612-214.7 612-230v-104.23q0-14.77 10.35-25.27T648-370h5v-40q0-29 19.5-48.5T721-478q29 0 48.5 19.5T789-410v40h5q14.45 0 24.22 10.35Q828-349.3 828-334v104.23q0 14.77-10.33 25.27-10.34 10.5-25.61 10.5H648.28ZM681-370h80v-40q0-17-11.5-28.5T721-450q-17 0-28.5 11.5T681-410v40Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiLockedW100.displayName = 'OnesyIconMaterialNetworkWifiLockedW100';

export default IconMaterialNetworkWifiLockedW100;
