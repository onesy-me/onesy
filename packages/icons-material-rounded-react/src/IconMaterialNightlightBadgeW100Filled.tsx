import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlightBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightBadgeW100Filled'

      short_name='NightlightBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.174 924Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924ZM480 796q12 0 24-1.5t23-3.5q5-1 11-13 1-5-1-10t-6.717-7.743Q485 731 457.5 682.737 430 634.473 430 576q0-58.473 27.5-106.737Q485 421 530.283 391.667 535 388 537 383.5t1-9.5q-1-5-3.5-8.5T527 361q-11-2-23-3.5t-24-1.5q-91.667 0-155.833 63.776Q260 483.553 260 576.235 260 668 324.167 732 388.333 796 480 796Z"/>
    </Icon>
  );
});

IconMaterialNightlightBadgeW100Filled.displayName = 'OnesyIconMaterialNightlightBadgeW100Filled';

export default IconMaterialNightlightBadgeW100Filled;
