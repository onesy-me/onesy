import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaW100Filled'

      short_name='Spa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M469-138q-133-22-216-117t-97-238q-1-6 1-11t6-9q4-4 9-5.5t11 .5q136 22 221 109t93 245q1 6-1.5 11t-6.5 9q-4 4-9 5.5t-11 .5Zm11-210q-18-34-45.5-68.5T374-472q0-60 25-134.5T462-738q4-5 8.5-7.5t9.5-2.5q5 0 10 2.5t8 7.5q38 57 63 132.5T586-470q-32 18-62.5 56T480-348Zm48 204q-2-45-11-89.5T494-312q29-75 102.5-132T778-518q6-2 11-.5t9 5.5q4 4 6 9t1 11q-13 132-81 218T528-144Z"/>
    </Icon>
  );
});

IconMaterialSpaW100Filled.displayName = 'OnesyIconMaterialSpaW100Filled';

export default IconMaterialSpaW100Filled;
