import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsPausedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsPausedW100Filled'

      short_name='NotificationsPaused'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-212q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h46v-328q0-77 49.5-135T446-774v-20q0-14.17 9.88-24.08 9.88-9.92 24-9.92t24.12 9.92q10 9.91 10 24.08v20q75 13 124.5 71T688-568v328h46q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm253.82 100q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM554-342q5.83 0 9.92-4.12 4.08-4.12 4.08-10t-4.08-9.88q-4.09-4-9.92-4H428l137-176q2-2 2.5-4.36.5-2.35.5-4.71v-9.04q0-5.89-4.08-9.89-4.09-4-9.92-4H406q-5.83 0-9.92 4.12-4.08 4.12-4.08 10t4.08 9.88q4.09 4 9.92 4h126L395-374q-2 2-2.5 4.36-.5 2.35-.5 4.71v9.04q0 5.89 4.08 9.89 4.09 4 9.92 4h148Z"/>
    </Icon>
  );
});

IconMaterialNotificationsPausedW100Filled.displayName = 'OnesyIconMaterialNotificationsPausedW100Filled';

export default IconMaterialNotificationsPausedW100Filled;
