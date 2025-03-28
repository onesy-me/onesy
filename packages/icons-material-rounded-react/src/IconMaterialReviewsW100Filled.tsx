import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReviewsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsW100Filled'

      short_name='Reviews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m244-292-86 86q-7 7-16.5 3.5T132-216v-552q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm236-185 64 39q8 5 16-1t6-16l-17-72 56-48q8-7 5-16t-13-10l-74-7-29-68q-4-9-14-9t-14 9l-29 68-74 7q-10 1-13 10t5 16l56 48-17 72q-2 10 6 16t16 1l64-39Z"/>
    </Icon>
  );
});

IconMaterialReviewsW100Filled.displayName = 'OnesyIconMaterialReviewsW100Filled';

export default IconMaterialReviewsW100Filled;
