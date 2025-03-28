import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInventory2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inventory2'

      short_name='Inventory2'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon enableBackground="new" opacity=".3" points="4,7 20,7 20,3.98 4,4"/><path d="M5,20h14V9H5V20z M9,12h6v2H9V12z" enableBackground="new" opacity=".3"/><path d="M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M19,20H5V9h14V20z M20,7H4V4l16-0.02V7z"/><rect height="2" width="6" x="9" y="12"/></g></g>
    </Icon>
  );
});

IconMaterialInventory2.displayName = 'OnesyIconMaterialInventory2';

export default IconMaterialInventory2;
