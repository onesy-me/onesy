import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsW100'

      short_name='Notifications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v54q75 13 124.5 71T688-568v328h60v28H212Zm268-282Zm-.18 382q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM300-240h360v-328q0-75-52.5-127.5T480-748q-75 0-127.5 52.5T300-568v328Z"/>
    </Icon>
  );
});

IconMaterialNotificationsW100.displayName = 'OnesyIconMaterialNotificationsW100';

export default IconMaterialNotificationsW100;
