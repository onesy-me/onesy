import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter5Filled'

      short_name='Counter5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-80-200h120q33 0 56.5-23.5T600-360v-80q0-33-23.5-56.5T520-520h-80v-80h120q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680H400q-17 0-28.5 11.5T360-640v160q0 17 11.5 28.5T400-440h120v80H400q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280Z"/>
    </Icon>
  );
});

IconMaterialCounter5Filled.displayName = 'OnesyIconMaterialCounter5Filled';

export default IconMaterialCounter5Filled;
