import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapHorizontalCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizontalCircleFilled'

      short_name='SwapHorizontalCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-240 56-56-62-64h166v-80H354l62-64-56-56-160 160 160 160Zm240-160 160-160-160-160-56 56 62 64H440v80h166l-62 64 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizontalCircleFilled.displayName = 'OnesyIconMaterialSwapHorizontalCircleFilled';

export default IconMaterialSwapHorizontalCircleFilled;
