import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInventory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory'

      short_name='Inventory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H120v-720h247q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h246v280ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialInventory.displayName = 'OnesyIconMaterialInventory';

export default IconMaterialInventory;
