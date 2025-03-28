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
      <path d="M200-240q-17 0-28.5-11.5T160-280q0-17 11.5-28.5T200-320h220L108-632q-11-11-11.5-27.5T108-688q11-11 28-11t28 11l316 315 208-208q-4-9-6-18.5t-2-20.5q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29q-9 0-17.5-1.5T746-526L540-320h220q17 0 28.5 11.5T800-280q0 17-11.5 28.5T760-240H200Z"/>
    </Icon>
  );
});

IconMaterialNetworkPing.displayName = 'OnesyIconMaterialNetworkPing';

export default IconMaterialNetworkPing;
