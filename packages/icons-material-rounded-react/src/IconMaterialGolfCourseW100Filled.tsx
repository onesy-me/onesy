import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGolfCourseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GolfCourseW100Filled'

      short_name='GolfCourse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M780.12-146Q766-146 756-155.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T804.12-156q-9.88 10-24 10Zm-380 40Q311-106 248.5-121.5T186-160q0-18.32 47-32.66Q280-207 330-210v28q0 11 8.05 19.5T358-154q11 0 19.5-8.5T386-182v-608q0-17.5 14-26.25t29-.75l139.15 67.07Q585-742 585.5-723T569-696l-155 80v402q86 5 143 19.43T614-160q0 23-62.38 38.5T400.12-106Z"/>
    </Icon>
  );
});

IconMaterialGolfCourseW100Filled.displayName = 'OnesyIconMaterialGolfCourseW100Filled';

export default IconMaterialGolfCourseW100Filled;
