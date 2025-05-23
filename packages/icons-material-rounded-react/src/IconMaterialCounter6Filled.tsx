import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter6Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter6Filled'

      short_name='Counter6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-200h80q33 0 56.5-23.5T600-360v-80q0-33-23.5-56.5T520-520h-80v-80h80q17 0 28.5-11.5T560-640q0-17-11.5-28.5T520-680h-80q-33 0-56.5 23.5T360-600v240q0 33 23.5 56.5T440-280Zm0-160h80v80h-80v-80Z"/>
    </Icon>
  );
});

IconMaterialCounter6Filled.displayName = 'OnesyIconMaterialCounter6Filled';

export default IconMaterialCounter6Filled;
