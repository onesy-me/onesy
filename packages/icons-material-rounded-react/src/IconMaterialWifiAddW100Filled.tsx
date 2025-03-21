import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAddW100Filled'

      short_name='WifiAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M747.96-192q-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H628q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H762v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM480-216q-11 0-20-3.5t-16.7-11.2L124-550q-9-9-13.5-20.5T106-594q0-14 6.03-26.93Q118.07-633.87 131-643q78-52 166.33-78.5 88.34-26.5 182.5-26.5 94.17 0 182.67 26.5Q751-695 828.75-643.25 842-635 848.5-622t6.5 27q0 12-5 24t-14 21l-4 4q-4.93 5.25-11.96 7.12Q813-537 806-539q-14-4-29.33-6-15.34-2-30.67-2-95.6 0-162.8 67.2Q516-412.6 516-317q0 15.33 2 30.67 2 15.33 6 29.33 2 7 0 14t-7 12q-8 8-17 11.5t-20 3.5Z"/>
    </Icon>
  );
});

IconMaterialWifiAddW100Filled.displayName = 'OnesyIconMaterialWifiAddW100Filled';

export default IconMaterialWifiAddW100Filled;
