import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsRunW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRunW100Filled'

      short_name='DirectionsRun'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-80v-209L420-410l-38 167q-3 12-13 18.5t-22 4.5l-183-37q-6-2-9.5-6.5T153-274q2-5 6.5-8.5t9.5-1.5l179 36 78-400-132 55v113q0 6-4 10t-10 4q-6 0-10-4t-4-10v-112q0-9 5.5-16.5T285-620l141-58q23-9 34-12.5t20-3.5q14 0 26 7.5t20 20.5l40 64q23 37 63 66t90 38q6 2 10.5 6t4.5 10q0 6-4.5 9.5T719-470q-50-8-101.5-40.5T527-611l-39 199 77 75q5 5 7 10.5t2 11.5v235q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm-6-676q-27 0-45.5-18.5T476-820q0-27 18.5-45.5T540-884q27 0 45.5 18.5T604-820q0 27-18.5 45.5T540-756Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRunW100Filled.displayName = 'OnesyIconMaterialDirectionsRunW100Filled';

export default IconMaterialDirectionsRunW100Filled;
