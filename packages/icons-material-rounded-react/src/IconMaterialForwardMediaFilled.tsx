import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForwardMediaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardMediaFilled'

      short_name='ForwardMedia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800h6l-34-34q-11-11-11-27.5t11-28.5q12-12 28.5-12.5T509-891l103 103q11 11 11 28t-11 28L509-629q-12 12-28.5 11.5T452-630q-11-12-11-28.5t11-27.5l34-34h-6q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q106 0 185-69t93-174q2-16 14-26.5t28-10.5q16 0 28 10t10 25q-14 139-116 232T480-80Z"/>
    </Icon>
  );
});

IconMaterialForwardMediaFilled.displayName = 'OnesyIconMaterialForwardMediaFilled';

export default IconMaterialForwardMediaFilled;
