import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsActiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveW100'

      short_name='NotificationsActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-212q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h46v-328q0-77 49.5-135T446-774v-20q0-14.17 9.88-24.08 9.88-9.92 24-9.92t24.12 9.92q10 9.91 10 24.08v20q75 13 124.5 71T688-568v328h46q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm254-282Zm-.18 382q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM300-240h360v-328q0-75-52.5-127.5T480-748q-75 0-127.5 52.5T300-568v328ZM158.5-569q-6.5 0-10.5-4.5t-4-11.5q3-60 26-114t61-96q5-5 11-6.5t11 3q5 4.5 5 10.5t-5 11q-35 38-56 86.5T173-587q-1 7-4.5 12.5t-10 5.5Zm643.5 0q-7 0-10.5-5.5T787-587q-3-55-23.5-103T708-776q-5.35-4.91-6.18-11.45Q701-794 706-798.5q5-4.5 11.5-2.5t11.5 7q38 42 61 95.5T816-585q0 7-4.03 11.5-4.02 4.5-9.97 4.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveW100.displayName = 'OnesyIconMaterialNotificationsActiveW100';

export default IconMaterialNotificationsActiveW100;
