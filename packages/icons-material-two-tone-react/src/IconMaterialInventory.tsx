import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInventory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory'

      short_name='Inventory'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M21,11.5l1.5,1.5l-6.99,7L11,15.5l1.5-1.5l3.01,3L21,11.5z"/><g><polygon enableBackground="new" opacity=".3" points="17,5 17,8 7,8 7,5 5,5 5,19 11.68,19 8.17,15.5 12.5,11.17 15.51,14.17 19,10.67 19,5"/><path d="M5,19V5h2v3h10V5h2v5.67l2-2l0,0V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h8.68l-2-2H5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z"/></g></g></g>
    </Icon>
  );
});

IconMaterialInventory.displayName = 'OnesyIconMaterialInventory';

export default IconMaterialInventory;
