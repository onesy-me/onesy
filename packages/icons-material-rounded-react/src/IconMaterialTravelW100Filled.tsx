import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTravelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelW100Filled'

      short_name='Travel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m305-305-86-46q-5-2-5.5-7.5t3.5-9.5l5-4q2-2 4.5-3t4.5 0l85 13 169-169-273-148q-6-3-7-9.5t4-11.5l4-4q2-2 5.5-3.5t7.5-.5l348 88 106-107q10-10 23-10t23 10q10 10 10 23.5T726-680L621-573l87 347q1 4 0 7.5t-4 6.5l-2 2q-5 5-12.5 4.5T678-213L531-484 364-317l12 86q1 3-.5 6t-3.5 5l-2 2q-5 5-11 3.5t-9-6.5l-45-84Z"/>
    </Icon>
  );
});

IconMaterialTravelW100Filled.displayName = 'OnesyIconMaterialTravelW100Filled';

export default IconMaterialTravelW100Filled;
