import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOfflinePinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinFilled'

      short_name='OfflinePin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280h320v-80H320v80Zm118-120 226-226-57-55-169 169-86-86-56 56 142 142Zm42 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinFilled.displayName = 'OnesyIconMaterialOfflinePinFilled';

export default IconMaterialOfflinePinFilled;
