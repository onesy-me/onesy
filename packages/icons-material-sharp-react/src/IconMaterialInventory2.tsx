import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInventory2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2'

      short_name='Inventory2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-520H80v-280h800v280h-40v520H120Zm80-80h560v-440H200v440Zm-40-520h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z"/>
    </Icon>
  );
});

IconMaterialInventory2.displayName = 'OnesyIconMaterialInventory2';

export default IconMaterialInventory2;
