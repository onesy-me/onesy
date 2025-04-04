import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkWifi1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi1Bar'

      short_name='NetworkWifi1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M15.32,14.84C14.34,14.3,13.2,14,12,14c-1.2,0-2.34,0.3-3.32,0.84L2.92,9.07C5.51,7.08,8.67,6,12,6 s6.49,1.08,9.08,3.07L15.32,14.84z" opacity=".3"/><path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M15.32,14.84C14.34,14.3,13.2,14,12,14 c-1.2,0-2.34,0.3-3.32,0.84L2.92,9.07C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07L15.32,14.84z"/></g>
    </Icon>
  );
});

IconMaterialNetworkWifi1Bar.displayName = 'OnesyIconMaterialNetworkWifi1Bar';

export default IconMaterialNetworkWifi1Bar;
