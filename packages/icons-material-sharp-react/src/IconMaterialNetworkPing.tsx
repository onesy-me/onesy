import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkPing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPing'

      short_name='NetworkPing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-80h260L80-660l56-56 344 343 208-208q-4-9-6-18.5t-2-20.5q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29q-9 0-17.5-1.5T746-526L540-320h260v80H160Z"/>
    </Icon>
  );
});

IconMaterialNetworkPing.displayName = 'OnesyIconMaterialNetworkPing';

export default IconMaterialNetworkPing;
