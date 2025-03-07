import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditNotificationsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotificationsW100'

      short_name='EditNotifications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-112q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v54q17 3 32 8t29 13l-21 21q-17-8-35.5-12t-38.5-4q-75 0-127.5 52.5T300-568v328h360v-161l28-28v189h60v28H212Zm280-240Zm0 0v-78l231-230 77 78-230 230h-78Zm268-230-37-38 37 38ZM520-480h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsW100.displayName = 'OnesyIconMaterialEditNotificationsW100';

export default IconMaterialEditNotificationsW100;
