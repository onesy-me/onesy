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
      <path d="M480-216q-11 0-20-3.5t-16.7-11.2L124-550q-9-9-13.5-20.5T106-594q0-14 6.03-26.93Q118.07-633.87 131-643q78-52 166.33-78.5 88.34-26.5 182.5-26.5 94.17 0 182.67 26.5Q751-695 828.75-643.25 842-635 848.5-622t6.5 27q0 12-5 24t-14 21l-4 4q-4.93 5.25-11.96 7.12Q813-537 806-539q-14-4-29.33-6-15.34-2-30.67-2-95.6 0-162.8 67.2Q516-412.6 516-317q0 15.33 2 30.67 2 15.33 6 29.33 2 7 0 14t-7 12q-8 8-17 11.5t-20 3.5Zm168.28 22q-15.28 0-25.78-10.35Q612-214.7 612-230v-104.23q0-14.77 10.35-25.27T648-370h5v-40q0-29 19.5-48.5T721-478q29 0 48.5 19.5T789-410v40h5q14.45 0 24.22 10.35Q828-349.3 828-334v104.23q0 14.77-10.33 25.27-10.34 10.5-25.61 10.5H648.28ZM681-370h80v-40q0-17-11.5-28.5T721-450q-17 0-28.5 11.5T681-410v40Z"/>
    </Icon>
  );
});

IconMaterialWifiLockW100Filled.displayName = 'OnesyIconMaterialWifiLockW100Filled';

export default IconMaterialWifiLockW100Filled;
