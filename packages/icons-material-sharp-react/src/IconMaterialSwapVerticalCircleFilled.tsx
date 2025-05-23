import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapVerticalCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVerticalCircleFilled'

      short_name='SwapVerticalCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m560-200 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160ZM360-440h80v-166l64 62 56-56-160-160-160 160 56 56 64-62v166ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialSwapVerticalCircleFilled.displayName = 'OnesyIconMaterialSwapVerticalCircleFilled';

export default IconMaterialSwapVerticalCircleFilled;
