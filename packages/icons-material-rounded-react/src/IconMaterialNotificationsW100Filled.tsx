import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsW100Filled'

      short_name='Notifications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-212q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h46v-328q0-77 49.5-135T446-774v-20q0-14.17 9.88-24.08 9.88-9.92 24-9.92t24.12 9.92q10 9.91 10 24.08v20q75 13 124.5 71T688-568v328h46q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm253.82 100q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationsW100Filled.displayName = 'OnesyIconMaterialNotificationsW100Filled';

export default IconMaterialNotificationsW100Filled;
