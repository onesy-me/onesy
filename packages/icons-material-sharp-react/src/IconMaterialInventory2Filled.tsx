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
      <path d="M120-80v-520H80v-280h800v280h-40v520H120Zm40-600h640v-120H160v120Zm200 280h240v-80H360v80Z"/>
    </Icon>
  );
});

IconMaterialInventory2Filled.displayName = 'OnesyIconMaterialInventory2Filled';

export default IconMaterialInventory2Filled;
