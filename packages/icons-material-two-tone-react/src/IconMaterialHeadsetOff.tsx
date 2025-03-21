import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadsetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOff'

      short_name='HeadsetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" y="0"/></g><g><rect height="4" opacity=".3" width="2" x="5" y="14"/><polygon opacity=".3" points="16.83,14 19,16.17 19,14"/><g><path d="M12,4c3.87,0,7,3.13,7,7v1h-4v0.17L16.83,14H19v2.17l2,2V11c0-4.97-4.03-9-9-9C9.98,2,8.12,2.67,6.62,3.8l1.43,1.43 C9.17,4.45,10.53,4,12,4z"/><path d="M2.1,2.1L0.69,3.51l3.33,3.33C3.37,8.09,3,9.5,3,11v7c0,1.1,0.9,2,2,2h4v-8H5v-1c0-0.94,0.19-1.83,0.52-2.65L15,17.83V20 h2.17l1,1H12v2h7c0.34,0,0.65-0.09,0.93-0.24l0.55,0.55l1.41-1.41L2.1,2.1z M7,14v4H5v-4H7z"/></g></g>
    </Icon>
  );
});

IconMaterialHeadsetOff.displayName = 'OnesyIconMaterialHeadsetOff';

export default IconMaterialHeadsetOff;
