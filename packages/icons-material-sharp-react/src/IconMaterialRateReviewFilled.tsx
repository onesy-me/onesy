import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRateReviewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewFilled'

      short_name='RateReview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h123l241-242-120-123-244 242v123Zm242-204-38-37 39-39 37 38-38 38Zm-34 204h272v-80H528l-80 80ZM80-80v-800h800v640H240L80-80Z"/>
    </Icon>
  );
});

IconMaterialRateReviewFilled.displayName = 'OnesyIconMaterialRateReviewFilled';

export default IconMaterialRateReviewFilled;
