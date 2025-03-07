import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInactiveOrderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InactiveOrderFilled'

      short_name='InactiveOrder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M650-160h40v-160h-40v160Zm100 0h40v-160h-40v160ZM240-600h480v-80H240v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-80v-760h720v347q-28-14-58.5-20.5T720-520H240v80h284q-17 17-31.5 37T467-360H240v80h203q-2 10-2.5 19.5T440-240q0 42 11.5 80.5T486-86l-6 6-60-60-60 60-60-60-60 60-60-60-60 60Z"/>
    </Icon>
  );
});

IconMaterialInactiveOrderFilled.displayName = 'OnesyIconMaterialInactiveOrderFilled';

export default IconMaterialInactiveOrderFilled;
