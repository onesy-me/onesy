import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRateReviewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewW100'

      short_name='RateReview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290-420h36q6 0 11-2t10-7l205-205q4-5 6-10t2-10q0-5-2-10t-6-10l-37-38q-4-4-9.5-6t-10.5-2q-5 0-10 2t-10 6L269-507q-5 5-7 10t-2 11v36q0 13 8.5 21.5T290-420Zm242-234-37-38 37 38ZM288-448v-38l149-149 18 20 19 19-148 148h-38Zm167-167 19 19-37-39 18 20Zm25 195h206q6 0 10-4t4-10q0-6-4-10t-10-4H508l-28 28ZM244-292l-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialRateReviewW100.displayName = 'OnesyIconMaterialRateReviewW100';

export default IconMaterialRateReviewW100;
