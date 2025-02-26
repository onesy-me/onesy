import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRangeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRangeW100'

      short_name='ArrowRange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m185-465 121 121q4 4 3.5 9.5T305-325q-4 4-9 4t-9-4L153-458q-5-5-7-10t-2-11q0-6 2-11t7-10l133-133q4-4 9.5-4t9.5 4q5 4 4.5 10t-4.5 10L186-494h588L655-613q-4-4-4.5-10t4.5-10q4-4 10-3.5t10 4.5l132 132q5 5 7 10t2 11q0 6-2 11t-7 10L674-325q-4 4-9 4t-10-4q-5-4-5-10t5-11l119-119H185Z"/>
    </Icon>
  );
});

IconMaterialArrowRangeW100.displayName = 'OnesyIconMaterialArrowRangeW100';

export default IconMaterialArrowRangeW100;
