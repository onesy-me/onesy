import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTibiaAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaAltW100Filled'

      short_name='TibiaAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M450-80q-24-54-31.5-110.5t-7-104q.5-47.5 5-81.5t4.5-44q0-6-1.5-11t-8.5-6q-2 0-28-3.5T318.5-456q-38.5-12-85-34T143-549l189-247 266 121q51 23 80.5 69T708-503v423H450Zm96-133q8 0 14.5-4t9.5-10q4 6 10 10t14 4q12 0 20-8.5t8-19.5q0-12-8-20t-20-8h-10v-183h10q12 0 20-8.5t8-19.5q0-12-8-20t-20-8q-8 0-14 3.5t-10 9.5q-3-6-9.5-9.5T546-508q-11 0-19.5 8t-8.5 20q0 11 8.5 19.5T546-452h10v183h-10q-11 0-19.5 8t-8.5 20q0 11 8.5 19.5T546-213Z"/>
    </Icon>
  );
});

IconMaterialTibiaAltW100Filled.displayName = 'OnesyIconMaterialTibiaAltW100Filled';

export default IconMaterialTibiaAltW100Filled;
