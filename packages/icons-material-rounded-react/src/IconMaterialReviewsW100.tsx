import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReviewsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsW100'

      short_name='Reviews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-477 64 39q8 5 16-1t6-16l-17-72 56-48q8-7 5-16t-13-10l-74-7-29-68q-4-9-14-9t-14 9l-29 68-74 7q-10 1-13 10t5 16l56 48-17 72q-2 10 6 16t16 1l64-39ZM244-292l-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialReviewsW100.displayName = 'OnesyIconMaterialReviewsW100';

export default IconMaterialReviewsW100;
