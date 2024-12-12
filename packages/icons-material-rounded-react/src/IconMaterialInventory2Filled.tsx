import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInventory2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2Filled'

      short_name='Inventory2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm-40-600h640v-120H160v120Zm240 280h160q17 0 28.5-11.5T600-440q0-17-11.5-28.5T560-480H400q-17 0-28.5 11.5T360-440q0 17 11.5 28.5T400-400Z"/>
    </Icon>
  );
});

IconMaterialInventory2Filled.displayName = 'OnesyIconMaterialInventory2Filled';

export default IconMaterialInventory2Filled;
