import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOverviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewW100Filled'

      short_name='Overview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m787-147 20-20-73-73v-108h-28v120l81 81Zm-67 61q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86ZM306-614h348v-28H306v28Zm153 442H172v-616h616v289q-17-4-34-6.5t-34-2.5q-23 0-45 4t-43 11v-1H306v28h269q-34 22-59.5 52.5T474-346H306v28h157q-5 19-8 38.5t-3 39.5q0 14 1 34t6 34Z"/>
    </Icon>
  );
});

IconMaterialOverviewW100Filled.displayName = 'OnesyIconMaterialOverviewW100Filled';

export default IconMaterialOverviewW100Filled;
