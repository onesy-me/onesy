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
      <path d="M479.82-112q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM734-212H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h46v-328q0-77 49.5-135T446-774v-20q0-14.17 9.88-24.08 9.88-9.92 24-9.92t24.12 9.92q10 9.91 10 24.08v19.6q13 1.4 25 5.4t23 9q7 3 11 9t2 12.5q-2 6.5-7.5 8.5t-10.5 0q-18-9-37.5-13.5T480-748q-75 0-127.5 52.5T300-568v328h360v-168q0-7 4.32-10.5t9.5-3.5q5.18 0 9.68 3.5T688-408v168h46q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM492-452Zm0-30v-36q0-5.57 2-10.78 2-5.22 7-10.22l202-201q5-5 9.89-6.5 4.89-1.5 9.78-1.5 5.33 0 10.65 2 5.33 2 9.68 6l37 38q4 5 6 10t2 10q0 5-2 10t-6 10L579-461q-5 5-10.22 7-5.21 2-10.78 2h-36q-12.75 0-21.37-8.63Q492-469.25 492-482Zm268-200-37-38 37 38ZM520-480h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsW100.displayName = 'OnesyIconMaterialEditNotificationsW100';

export default IconMaterialEditNotificationsW100;
