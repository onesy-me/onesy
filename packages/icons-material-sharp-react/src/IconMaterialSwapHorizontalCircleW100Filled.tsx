import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapHorizontalCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizontalCircleW100Filled'

      short_name='SwapHorizontalCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m396-276 20-20-90-90h194v-28H326l90-90-20-20-124 124 124 124Zm168-160 124-124-124-124-20 20 90 90H440v28h194l-90 90 20 20Zm-83.83 304q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizontalCircleW100Filled.displayName = 'OnesyIconMaterialSwapHorizontalCircleW100Filled';

export default IconMaterialSwapHorizontalCircleW100Filled;
