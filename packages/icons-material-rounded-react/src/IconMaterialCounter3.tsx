import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter3'

      short_name='Counter3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-80 200h120q33 0 56.5-23.5T600-360v-60q0-26-17-43t-43-17q26 0 43-17t17-43v-60q0-33-23.5-56.5T520-680H400q-17 0-28.5 11.5T360-640q0 17 11.5 28.5T400-600h120v80h-40q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440h40v80H400q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280Z"/>
    </Icon>
  );
});

IconMaterialCounter3.displayName = 'OnesyIconMaterialCounter3';

export default IconMaterialCounter3;
