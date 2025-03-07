import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffW100Filled'

      short_name='NotificationsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-28h60v-328q0-20 4-40.5t12-39.5l80 80h-40L122-774l20-20 678 678-20 20-116-116H212Zm476-152L334-718q23-22 51.5-36.5T446-774v-54h68v54q76 11 125 69.5T688-568v204ZM480-112q-25 0-42.5-17.5T420-172h120q0 25-17.5 42.5T480-112Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffW100Filled.displayName = 'OnesyIconMaterialNotificationsOffW100Filled';

export default IconMaterialNotificationsOffW100Filled;
