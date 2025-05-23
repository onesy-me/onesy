import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCircleNotifications = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CircleNotifications'

      short_name='CircleNotifications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-220q25 0 42.5-17.5T540-280H420q0 25 17.5 42.5T480-220Zm-80-180v-120q0-33 23.5-56.5T480-600q33 0 56.5 23.5T560-520v120H400Zm80 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM320-320h320q17 0 28.5-11.5T680-360q0-17-11.5-28.5T640-400v-104q0-61-31.5-111.5T520-680v-20q0-17-11.5-28.5T480-740q-17 0-28.5 11.5T440-700v20q-57 14-88.5 64.5T320-504v104q-17 0-28.5 11.5T280-360q0 17 11.5 28.5T320-320Z"/>
    </Icon>
  );
});

IconMaterialCircleNotifications.displayName = 'OnesyIconMaterialCircleNotifications';

export default IconMaterialCircleNotifications;
