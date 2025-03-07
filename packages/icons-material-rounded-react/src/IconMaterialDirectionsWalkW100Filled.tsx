import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsWalkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsWalkW100Filled'

      short_name='DirectionsWalk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-408 345-76q-1 5-5 7.5t-9 2.5q-7 0-11.5-4.5T317-82l116-566-132 54v113q0 6-4 10t-10 4q-6 0-10-4t-4-10v-112q0-9 5-16.5t13-11.5l152-64q14-6 25.5-7.5t22.5.5q11 2 19.5 8.5T526-666l24 38q18 29 39 52t44 40q20 15 42 24t46 14q6 1 9.5 5.5T734-482q0 6-4.5 9.5T719-470q-60-11-108.5-46.5T527-611l-40 201 79 85q4 5 6 10t2 11v224q0 6-4 10t-10 4q-6 0-10-4t-4-10v-213L426-408Zm114-348q-27 0-45.5-18.5T476-820q0-27 18.5-45.5T540-884q27 0 45.5 18.5T604-820q0 27-18.5 45.5T540-756Z"/>
    </Icon>
  );
});

IconMaterialDirectionsWalkW100Filled.displayName = 'OnesyIconMaterialDirectionsWalkW100Filled';

export default IconMaterialDirectionsWalkW100Filled;
