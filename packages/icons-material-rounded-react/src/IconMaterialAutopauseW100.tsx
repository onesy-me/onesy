import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutopauseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutopauseW100'

      short_name='Autopause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-360q-6 0-10-4t-4-10v-212q0-6 4-10t10-4q6 0 10 4t4 10v212q0 6-4 10t-10 4Zm108 0q-6 0-10-4t-4-10v-212q0-6 4-10t10-4q6 0 10 4t4 10v212q0 6-4 10t-10 4ZM480-92q-119 0-213-63T120-333v147q0 6-4 10t-10 4q-6 0-10-4t-4-10v-164q0-13 8.5-21.5T122-380h163q6 0 10 4t4 10q0 6-4 10t-10 4H143q45 107 135 169.5T480-120q115 0 207.5-67T818-362q2-8 7-13t13-3q7 2 8.5 8.5T846-355q-40 118-140 190.5T480-92ZM108-520q-6 0-9-5.5T97-538q8-49 25-90t46-82q4-6 10-8t11 3q5 5 4.5 11t-4.5 12q-26 37-40.5 74T125-537q-2 7-6 12t-11 5Zm161-250q-6 4-12 4t-11-5q-4-5-2.5-10.5t6.5-9.5q41-29 82-46t91-25q7-1 12 2.5t5 9.5q0 7-4.5 11t-12.5 5q-45 7-81 22.5T269-770Zm444 0q-5 5-11 4.5t-12-5.5q-35-26-72-41t-81-22q-8-1-12.5-5t-4.5-11q0-6 4.5-9.5T536-862q50 8 90.5 25t81.5 46q6 4 8 10t-3 11Zm137 250q-7 0-10.5-5t-5.5-13q-8-45-22.5-82T768-692q-4-5-4.5-11t4.5-11q5-5 10.5-3.5t9.5 6.5q31 40 48.5 81.5T862-538q1 8-2 13t-10 5Z"/>
    </Icon>
  );
});

IconMaterialAutopauseW100.displayName = 'OnesyIconMaterialAutopauseW100';

export default IconMaterialAutopauseW100;
