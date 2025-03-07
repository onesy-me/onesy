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
      <path d="M678-606q14 23 22 48.5t8 54.5v378q0 19-13 32t-32 13H478q-13 0-23-7t-15-19q-18-52-23.5-104t-4.5-95.5q1-43.5 5-74.5t4-40q0-6-1.5-11t-8.5-6q-4 0-79-15.5T174-525q-14-9-15.5-25.5T167-580l143-188q10-13 25.5-16.5T365-781l233 106q26 11 46 28.5t34 40.5ZM546-213q8 0 14.5-4t9.5-10q4 6 10 10t14 4q12 0 20-8.5t8-19.5q0-12-8-20t-20-8h-10v-183h10q12 0 20-8.5t8-19.5q0-12-8-20t-20-8q-8 0-14 3.5t-10 9.5q-3-6-9.5-9.5T546-508q-11 0-19.5 8t-8.5 20q0 11 8.5 19.5T546-452h10v183h-10q-11 0-19.5 8t-8.5 20q0 11 8.5 19.5T546-213Z"/>
    </Icon>
  );
});

IconMaterialTibiaAltW100Filled.displayName = 'OnesyIconMaterialTibiaAltW100Filled';

export default IconMaterialTibiaAltW100Filled;
