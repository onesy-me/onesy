import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiNotificationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiNotificationW100Filled'

      short_name='WifiNotification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-112q-25 0-42.5-17.5T420-172h120q0 25-17.5 42.5T480-112ZM212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v54q26 5 49.5 15t43.5 26q-67 24-124.5 58T374-589l350 349h24v28H212Zm482-171-33-32q7-4 15.5-6.5T694-424q9 0 17 2.5t15 6.5l-32 32Zm-99-98-19-20q24-20 53.5-31.5T693-544q34 0 64.5 11.5T812-501l-20 20q-20-17-45-26t-53-9q-28 0-53.5 9T595-481Zm-85-85-20-20q41-37 92.5-57.5T694-664q60 0 111 20.5t92 57.5l-20 20q-36-32-84-51t-100-19q-52 0-99 19t-84 51Z"/>
    </Icon>
  );
});

IconMaterialWifiNotificationW100Filled.displayName = 'OnesyIconMaterialWifiNotificationW100Filled';

export default IconMaterialWifiNotificationW100Filled;
