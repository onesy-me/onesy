import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter3Filled'

      short_name='Counter3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM360-280h240v-160l-40-40 40-40v-160H360v80h160v80h-80v80h80v80H360v80Z"/>
    </Icon>
  );
});

IconMaterialCounter3Filled.displayName = 'OnesyIconMaterialCounter3Filled';

export default IconMaterialCounter3Filled;
