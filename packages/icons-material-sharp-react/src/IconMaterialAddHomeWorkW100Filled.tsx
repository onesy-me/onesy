import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddHomeWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWorkW100Filled'

      short_name='AddHomeWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M692-612h56v-56h-56v56Zm28 520q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92Zm-14-34h28v-100h100v-28H734v-100h-28v100H606v28h100v100Zm162-338q-32-22-70.5-33T720-508q-24 0-47 4t-45 12v-42L420-683v-105h448v324ZM92-172v-322l228-162 228 162v48q-46 37-71 92t-25 114q0 20 2 34.5t7 33.5h-69v-192H248v192H92Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWorkW100Filled.displayName = 'OnesyIconMaterialAddHomeWorkW100Filled';

export default IconMaterialAddHomeWorkW100Filled;
