import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotifications = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Notifications'

      short_name='Notifications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-88h120v88q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/>
    </Icon>
  );
});

IconMaterialNotifications.displayName = 'OnesyIconMaterialNotifications';

export default IconMaterialNotifications;
