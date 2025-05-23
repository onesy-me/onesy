import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter9Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter9Filled'

      short_name='Counter9'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-80-200h200v-400H360v240h160v80H400v80Zm120-240h-80v-80h80v80Z"/>
    </Icon>
  );
});

IconMaterialCounter9Filled.displayName = 'OnesyIconMaterialCounter9Filled';

export default IconMaterialCounter9Filled;
