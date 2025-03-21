import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkPing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPing'

      short_name='NetworkPing'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M12,14.67L3.41,6.09L2,7.5l8.5,8.5H4v2h16v-2h-6.5l5.15-5.15C18.91,10.95,19.2,11,19.5,11c1.38,0,2.5-1.12,2.5-2.5 S20.88,6,19.5,6S17,7.12,17,8.5c0,0.35,0.07,0.67,0.2,0.97L12,14.67z"/></g>
    </Icon>
  );
});

IconMaterialNetworkPing.displayName = 'OnesyIconMaterialNetworkPing';

export default IconMaterialNetworkPing;
