import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkLocked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLocked'

      short_name='NetworkLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M22 16v-.5c0-1.38-1.12-2.5-2.5-2.5S17 14.12 17 15.5v.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.5zM18 5.83v5.43c.47-.16.97-.26 1.5-.26.17 0 .33.03.5.05V1L1 20h13v-2H5.83L18 5.83z"/>
    </Icon>
  );
});

IconMaterialNetworkLocked.displayName = 'OnesyIconMaterialNetworkLocked';

export default IconMaterialNetworkLocked;
