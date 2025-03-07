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
      <path d="M479.82-112q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM226-212q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h46v-328q0-77 49.5-135T446-774v-20q0-14.17 9.88-24.08 9.88-9.92 24-9.92t24.12 9.92q10 9.91 10 24.08v19.6q13 1.4 25 5.4t25 10q6 4 9.5 9.5T575-738q-2 6-7.5 8t-10.5 0q-18-9-37.5-13.5T480-748q-75 0-127.5 52.5T300-568v328h360v-78q0-7 4.32-10.5t9.5-3.5q5.18 0 9.68 3.5T688-318v78h46q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm482-327H602q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H736v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106Zm-228 45Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddW100.displayName = 'OnesyIconMaterialNotificationAddW100';

export default IconMaterialNotificationAddW100;
