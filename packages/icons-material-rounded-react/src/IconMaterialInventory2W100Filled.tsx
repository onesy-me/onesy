import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInventory2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2W100Filled'

      short_name='Inventory2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-25 0-42.5-17.5T172-192v-443q-17-6-28.5-21.5T132-692v-76q0-25 17.5-42.5T192-828h576q25 0 42.5 17.5T828-768v76q0 20-11.5 35.5T788-635v443q0 25-17.5 42.5T728-132H232Zm-40-528h576q14 0 23-9t9-23v-76q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v76q0 14 9 23t23 9Zm199 201h179q5 0 7.5-3t2.5-8q0-5-2.5-7.5T570-480H390q-5 0-7.5 2.5T380-470q0 5 3 8t8 3Z"/>
    </Icon>
  );
});

IconMaterialInventory2W100Filled.displayName = 'OnesyIconMaterialInventory2W100Filled';

export default IconMaterialInventory2W100Filled;
