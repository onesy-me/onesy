import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleanHandsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsW100Filled'

      short_name='CleanHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m542-95-294-87v-242h89q6 0 11 1t10 3l230 84q17 6 30.5 24t13.5 34q0 9-4.5 13.5T614-260h-31q-28 0-52.5-3.5T486-274l-61-21q-6-2-11.5.5T406-287q-2 6 1 12t9 8l64 21q23 8 49 11t51 3h186q27 0 44.5 16t17.5 42L577-95q-7 2-17.5 2T542-95Zm-430-69v-228q0-14 9-23t23-9h44q14 0 23 9t9 23v228q0 14-9 23t-23 9h-44q-14 0-23-9t-9-23Zm481-256-225-80q-5-2-10-3t-10-1H244q0-69 47-113.5T405-670v-130h-46q-6 0-10-4t-4-10q0-6 4-10t10-4h180q19 0 35.5 4.5T608-813q5 2 9 5.5t4 8.5q0 6-4 10.5t-10 4.5q-3 0-6-1t-5-3q-13-7-27-9.5t-30-2.5H433v130q68 7 114 56.5T593-496v76Zm141-160q-23 0-38.5-15.5T680-634q0-17 10.5-41t33.5-59q1-1 10-5 1 0 10 5 23 35 33.5 59t10.5 41q0 23-15.5 38.5T734-580Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsW100Filled.displayName = 'OnesyIconMaterialCleanHandsW100Filled';

export default IconMaterialCleanHandsW100Filled;
