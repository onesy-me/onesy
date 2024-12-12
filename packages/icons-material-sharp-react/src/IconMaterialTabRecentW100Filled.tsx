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
      <path d="m786-154 20-20-72-71.61V-354h-28v120l80 80ZM560-610h240v-110H560v110ZM720-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92ZM132-212v-536h696v305q-23-13-51-19t-54-6q-95.21 0-162.11 66.5Q494-335 492-240v14.11q0 6.89 1 13.89H132Z"/>
    </Icon>
  );
});

IconMaterialTabRecentW100Filled.displayName = 'OnesyIconMaterialTabRecentW100Filled';

export default IconMaterialTabRecentW100Filled;
