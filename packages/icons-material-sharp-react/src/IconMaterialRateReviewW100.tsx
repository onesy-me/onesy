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
      <path d="M260-420h78l234-234-77-78-235 234v78Zm272-234-37-38 37 38ZM288-448v-38l149-149 18 20 19 19-148 148h-38Zm167-167 19 19-37-39 18 20Zm25 195h220v-28H508l-28 28ZM132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialRateReviewW100.displayName = 'OnesyIconMaterialRateReviewW100';

export default IconMaterialRateReviewW100;
