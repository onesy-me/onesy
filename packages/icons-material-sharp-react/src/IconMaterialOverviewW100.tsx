import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOverviewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewW100'

      short_name='Overview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m787-147 20-20-73-73v-108h-28v120l81 81Zm-615-25v-616h616v289q-8-2-14.5-3t-13.5-3v-255H200v560h254q1 8 2 14.5t3 13.5H172Zm28-68v40-560 255-3 268Zm106-78h157q2-7 5-13.5t6-14.5H306v28Zm0-148h269q16-9 29-15.5t28-11.5v-1H306v28Zm0-148h348v-28H306v28ZM720-86q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86Z"/>
    </Icon>
  );
});

IconMaterialOverviewW100.displayName = 'OnesyIconMaterialOverviewW100';

export default IconMaterialOverviewW100;
