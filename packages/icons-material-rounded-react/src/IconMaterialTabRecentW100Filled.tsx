import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabRecentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecentW100Filled'

      short_name='TabRecent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M734-246v-94q0-6-4-10t-10-4q-6 0-10 4t-4 10v94q0 6 2 11t7 10l61 61q4 4 9.5 4.5T796-164q5-5 5-10t-5-10l-62-62ZM560-720v80q0 13 8.5 21.5T590-610h210v-78q0-12-10-22t-22-10H560ZM720-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v207q0 14-11 21t-24 2q-17-5-35-7.5t-35-2.5q-95 0-162 66.5T492-240q0 11-8 19.5t-19 8.5H192Z"/>
    </Icon>
  );
});

IconMaterialTabRecentW100Filled.displayName = 'OnesyIconMaterialTabRecentW100Filled';

export default IconMaterialTabRecentW100Filled;
