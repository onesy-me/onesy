import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiProxyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxyW100'

      short_name='WifiProxy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M664-225h77v-77h-77v77Zm0-105h77v-77h-77v77Zm105 105h77v-77h-77v77Zm-103 28q-12.5 0-21.25-8.75T636-227v-178q0-12.5 8.75-21.25T666-435h73q12.5 0 21.25 8.75T769-405v75h75q12.5 0 21.25 8.75T874-300v73q0 12.5-8.75 21.25T844-197H666ZM479.83-748q94.17 0 182.67 26.5Q751-695 828.65-643.25 841-635 847.62-623.32q6.62 11.69 7.5 24.5.88 12.82-3.62 25.32T836-550l-16.58 16.95Q815-529 809.5-528.5T799-533q-5-5-5-10t5-10l18-18q11-11 9.5-26.5T812-621q-74-49-158.5-74T480-720q-89 0-173.5 25T148-621q-13 8-14.5 23.5T143-571l314 314q9 9 23 9t23-9l32-32q4-4 9.5-4.5T555-289q5 5 5 10t-5 10l-33 33q-9 9-20 13t-22 4q-11 0-22-4t-20-13L124-550q-10-10-14.5-22.81-4.5-12.8-3.5-26 1-13.19 7.5-24.69Q120-635 131-643q78-52 166.33-78.5 88.34-26.5 182.5-26.5Zm.17 266Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyW100.displayName = 'OnesyIconMaterialWifiProxyW100';

export default IconMaterialWifiProxyW100;
