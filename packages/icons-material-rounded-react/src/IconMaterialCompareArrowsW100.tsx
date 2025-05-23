import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompareArrowsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrowsW100'

      short_name='CompareArrows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M430-363H146q-6 0-10-4t-4-10q0-6 4-10t10-4h284L310-511q-4-4-4.5-9.5T310-531q5-5 10-5t10 5l133 133q5 5 7 10t2 11q0 6-2 11t-7 10L330-223q-4 4-9.5 4.5T310-223q-5-5-5-10t5-10l120-120Zm100-207 120 120q4 4 4.5 9.5T650-430q-5 5-10 5t-10-5L497-563q-5-5-7-10t-2-11q0-6 2-11t7-10l133-133q4-4 9.5-4.5T650-738q5 5 5 10t-5 10L530-598h284q6 0 10 4t4 10q0 6-4 10t-10 4H530Z"/>
    </Icon>
  );
});

IconMaterialCompareArrowsW100.displayName = 'OnesyIconMaterialCompareArrowsW100';

export default IconMaterialCompareArrowsW100;
