import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevices = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Devices'

      short_name='Devices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 10h4v7h-4z" opacity=".3"/><path d="M23 8h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7zM4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6z"/>
    </Icon>
  );
});

IconMaterialDevices.displayName = 'OnesyIconMaterialDevices';

export default IconMaterialDevices;
