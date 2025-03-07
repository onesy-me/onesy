import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFemurAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemurAltW100Filled'

      short_name='FemurAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M530-462q12 0 20-8.5t8-19.5q0-5-2-13 10-2 16-9.5t6-17.5q0-12-8-20t-20-8q-10 0-17.5 6t-9.5 16l-147-71q4-3 12-23 0-12-8-20t-20-8q-11 0-19.5 8t-8.5 20q0 8 3 12-10 2-16.5 9.5T312-590q0 11 8.5 19.5T340-562q9 0 16.5-5t10.5-13l145 69q-2 2-10 21 0 11 8.5 19.5T530-462Zm-387-87 189-247 266 121q51 23 80.5 69T708-503v423l-258-1q-24-54-31.5-110t-7-103.5q.5-47.5 5-81.5t4.5-44q0-6-1.5-11t-8.5-6q-2 0-28-3.5T318.5-456q-38.5-12-85-34T143-549Z"/>
    </Icon>
  );
});

IconMaterialFemurAltW100Filled.displayName = 'OnesyIconMaterialFemurAltW100Filled';

export default IconMaterialFemurAltW100Filled;
