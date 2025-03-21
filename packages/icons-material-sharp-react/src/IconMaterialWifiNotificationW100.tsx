import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiNotificationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiNotificationW100'

      short_name='WifiNotification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-112q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v54q26.23 5 49.62 15Q587-749 607-733q-8 3-16.5 5.45T574-722q-21-13-45-19.5t-49-6.5q-75 0-127.5 52.5T300-568v328h448v28H212Zm300-282Zm-2-72-20-20q41-37 92.5-57.5T694-664q60 0 111 20.5t92 57.5l-20 20q-36-32-84-51t-100-19q-52 0-99 19t-84 51Zm85 85-19-20q24-20 53.31-31.5 29.31-11.5 63.5-11.5t64.69 11.5Q788-521 812-501l-20 20q-20-17-45-26t-53-9q-28 0-53.5 9T595-481Zm99 98-33-32q6.6-4.13 15.3-6.56Q685-424 694-424t17 2.5q8 2.5 15 6.5l-32 32Z"/>
    </Icon>
  );
});

IconMaterialWifiNotificationW100.displayName = 'OnesyIconMaterialWifiNotificationW100';

export default IconMaterialWifiNotificationW100;
