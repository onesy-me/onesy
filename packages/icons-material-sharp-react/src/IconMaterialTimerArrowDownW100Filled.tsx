import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerArrowDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerArrowDownW100Filled'

      short_name='TimerArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-212q-101 0-171.5-71T110-455q0-101 70.5-172T352-698q46 0 87.5 16t73.5 45l37-37 19 19-36 37q29 32 45.5 73.5T595-455q0 101-71 172t-172 71Zm422 0-98-98 20-20 64 64v-482h28v482l64-64 20 20-98 98ZM282-760v-28h142v28H282Zm56 309h28v-138h-28v138Z"/>
    </Icon>
  );
});

IconMaterialTimerArrowDownW100Filled.displayName = 'OnesyIconMaterialTimerArrowDownW100Filled';

export default IconMaterialTimerArrowDownW100Filled;
