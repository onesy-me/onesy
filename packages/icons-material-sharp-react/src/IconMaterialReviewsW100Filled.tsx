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
      <path d="M132-180v-648h696v536H244L132-180Zm254-240 94-57 94 57-25-107 83-71-109-10-43-100-43 100-109 10 83 71-25 107Z"/>
    </Icon>
  );
});

IconMaterialReviewsW100Filled.displayName = 'OnesyIconMaterialReviewsW100Filled';

export default IconMaterialReviewsW100Filled;
