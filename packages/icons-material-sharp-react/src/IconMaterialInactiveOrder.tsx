import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInactiveOrder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InactiveOrder'

      short_name='InactiveOrder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M650-160h40v-160h-40v160Zm100 0h40v-160h-40v160ZM240-600h480v-80H240v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-80v-760h720v347q-19-9-39-15t-41-9v-243H200v562h243q5 31 15.5 59T486-86l-6 6-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h203q3-21 9-41t15-39H240v80Zm0-160h284q38-37 88.5-58.5T720-520H240v80Zm-40 242v-562 562Z"/>
    </Icon>
  );
});

IconMaterialInactiveOrder.displayName = 'OnesyIconMaterialInactiveOrder';

export default IconMaterialInactiveOrder;
