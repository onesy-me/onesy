import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter0Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter0Filled'

      short_name='Counter0'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-200h80q33 0 56.5-23.5T600-360v-240q0-33-23.5-56.5T520-680h-80q-33 0-56.5 23.5T360-600v240q0 33 23.5 56.5T440-280Zm0-320h80v240h-80v-240Z"/>
    </Icon>
  );
});

IconMaterialCounter0Filled.displayName = 'OnesyIconMaterialCounter0Filled';

export default IconMaterialCounter0Filled;
