import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandCircleDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleDownW100Filled'

      short_name='ExpandCircleDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-416 366-530q-3.75-4-9.37-4-5.63 0-9.63 4-5 4-4.5 10t4.5 10l112 112q9 9 21 9t21-9l112-112q4-4 4.5-10t-4.5-10q-4-4-10-3.5t-10 4.5L480-416Zm.17 284q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleDownW100Filled.displayName = 'OnesyIconMaterialExpandCircleDownW100Filled';

export default IconMaterialExpandCircleDownW100Filled;
