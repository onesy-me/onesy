import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShareReviewsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareReviewsW100'

      short_name='ShareReviews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-386q23 0 38.5-15.5T634-440q0-23-15.5-38.5T580-494q-12 0-22 5t-18 13l-147-74q1-2 1-4.5V-566q0-3-1-5l146-73q8 8 18.5 13t22.5 5q23 0 38.5-15.5T634-680q0-23-15.5-38.5T580-734q-23 0-38.5 15.5T526-680v5.5q0 2.5 1 5.5l-146 73q-8-8-18.5-13t-22.5-5q-23 0-38.5 15.5T286-560q0 23 15.5 38.5T340-506q12 0 22.5-5.5T381-525l146 74q-1 3-1 5.5v5.5q0 23 15.5 38.5T580-386ZM132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialShareReviewsW100.displayName = 'OnesyIconMaterialShareReviewsW100';

export default IconMaterialShareReviewsW100;
