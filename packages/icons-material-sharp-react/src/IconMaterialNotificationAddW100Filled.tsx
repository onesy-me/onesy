import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddW100Filled'

      short_name='NotificationAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-112q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM708-419v-120H588v-28h120v-120h28v120h120v28H736v120h-28ZM212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v54q20 4 38 10.5t35 17.5q-46 32-73 82.5T487-553q0 88.79 57.5 154.39Q602-333 688-319.58V-240h60v28H212Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddW100Filled.displayName = 'OnesyIconMaterialNotificationAddW100Filled';

export default IconMaterialNotificationAddW100Filled;
