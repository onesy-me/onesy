import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRateReviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewW100Filled'

      short_name='RateReview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290-420h36q6 0 11-2t10-7l205-205q4-5 6-10t2-10q0-5-2-10t-6-10l-37-38q-4-4-9.5-6t-10.5-2q-5 0-10 1.5t-10 6.5L269-507q-5 5-7 10t-2 11v36q0 13 8.5 21.5T290-420Zm205-195-38-38 38-38 37 38-37 38Zm-15 195h206q6 0 10-4t4-10q0-6-4-10t-10-4H508l-28 28ZM244-292l-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Z"/>
    </Icon>
  );
});

IconMaterialRateReviewW100Filled.displayName = 'OnesyIconMaterialRateReviewW100Filled';

export default IconMaterialRateReviewW100Filled;
