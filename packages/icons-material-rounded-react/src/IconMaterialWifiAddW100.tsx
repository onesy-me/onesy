import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAddW100'

      short_name='WifiAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M734-312H628q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H762v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106ZM479.83-748q94.17 0 182.67 26.5Q751-695 829-643q13 8 19.5 20.8T855-595q0 12-5 24t-14 21l-16.58 16.95Q815-529 809.5-528.5T799-533q-5-5-5-10t5-10l18-18q11-11 9.5-26.5T812-621q-74-49-158.5-74T480-720q-89 0-173.5 25T148-621q-13 8-14.5 23.5T143-571l314 314q9 9 23 9t23-9l32-32q4-4 9.5-4.5T555-289q5 5 5 10t-5 10l-33 33q-9 9-20 13t-22 4q-11 0-22-4t-20-13L124-550q-9-9-13.5-20.5T106-594q0-14 6.03-26.93Q118.07-633.87 131-643q78-52 166.33-78.5 88.34-26.5 182.5-26.5Zm.17 266Z"/>
    </Icon>
  );
});

IconMaterialWifiAddW100.displayName = 'OnesyIconMaterialWifiAddW100';

export default IconMaterialWifiAddW100;
