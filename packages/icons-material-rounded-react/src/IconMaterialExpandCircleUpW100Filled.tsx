import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandCircleUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleUpW100Filled'

      short_name='ExpandCircleUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-544 114 114q3.75 4 9.38 4 5.62 0 9.62-4 5-4 4.5-10t-4.5-10L501-562q-9-9-21-9t-21 9L347-450q-4 4-4.5 10t4.5 10q4 4 10 3.5t10-4.5l113-113Zm.17 412q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleUpW100Filled.displayName = 'OnesyIconMaterialExpandCircleUpW100Filled';

export default IconMaterialExpandCircleUpW100Filled;
