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
      <path d="M530-462q12 0 20-8.5t8-19.5q0-5-2-13 10-2 16-9.5t6-17.5q0-12-8-20t-20-8q-10 0-17.5 6t-9.5 16l-147-71q4-3 12-23 0-12-8-20t-20-8q-11 0-19.5 8t-8.5 20q0 8 3 12-10 2-16.5 9.5T312-590q0 11 8.5 19.5T340-562q9 0 16.5-5t10.5-13l145 69q-2 2-10 21 0 11 8.5 19.5T530-462Zm148-144q14 23 22 48.5t8 54.5v378q0 19-13 32t-32 13l-186-1q-13 0-22.5-7T440-107q-37-104-28-199.5t9-113.5q0-6-1.5-11t-8.5-6q-4 0-79-15.5T174-525q-14-9-15.5-25.5T167-580l143-188q10-13 25.5-16.5T365-781l233 106q26 11 46 28.5t34 40.5Z"/>
    </Icon>
  );
});

IconMaterialFemurAltW100Filled.displayName = 'OnesyIconMaterialFemurAltW100Filled';

export default IconMaterialFemurAltW100Filled;
