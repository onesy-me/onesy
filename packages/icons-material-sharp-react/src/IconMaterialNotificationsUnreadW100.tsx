import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsUnreadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsUnreadW100'

      short_name='NotificationsUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-112q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5Zm.18-382ZM212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v34q-8 11-15 22t-12 24h-7q-75 0-127.5 52.5T300-568v328h360v-239h14q7 0 14-1v240h60v28H212Zm454.12-367q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationsUnreadW100.displayName = 'OnesyIconMaterialNotificationsUnreadW100';

export default IconMaterialNotificationsUnreadW100;
