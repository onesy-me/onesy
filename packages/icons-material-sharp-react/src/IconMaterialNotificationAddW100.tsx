import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddW100'

      short_name='NotificationAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-494Zm-.18 382q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM708-419v-120H588v-28h120v-120h28v120h120v28H736v120h-28ZM212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v54q20 4 38.5 10.5T588-746q-6 5-12.55 9.12-6.54 4.13-11.45 8.88-19.06-10-40.03-15-20.97-5-43.97-5-75 0-127.5 52.5T300-568v328h360v-86q7 2 13.5 3.5T688-320v80h60v28H212Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddW100.displayName = 'OnesyIconMaterialNotificationAddW100';

export default IconMaterialNotificationAddW100;
