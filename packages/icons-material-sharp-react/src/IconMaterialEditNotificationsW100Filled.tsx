import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditNotificationsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotificationsW100Filled'

      short_name='EditNotifications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-112q-25 0-42.5-17.5T420-172h120q0 25-17.5 42.5T480-112ZM212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v54q17 3 32 8t29 13L392-572v220h219l77-77v189h60v28H212Zm280-240v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsW100Filled.displayName = 'OnesyIconMaterialEditNotificationsW100Filled';

export default IconMaterialEditNotificationsW100Filled;
