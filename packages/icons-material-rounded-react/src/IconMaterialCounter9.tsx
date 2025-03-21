import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter9 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter9'

      short_name='Counter9'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-40 200h80q33 0 56.5-23.5T600-360v-240q0-33-23.5-56.5T520-680h-80q-33 0-56.5 23.5T360-600v80q0 33 23.5 56.5T440-440h80v80h-80q-17 0-28.5 11.5T400-320q0 17 11.5 28.5T440-280Zm80-240h-80v-80h80v80Z"/>
    </Icon>
  );
});

IconMaterialCounter9.displayName = 'OnesyIconMaterialCounter9';

export default IconMaterialCounter9;
