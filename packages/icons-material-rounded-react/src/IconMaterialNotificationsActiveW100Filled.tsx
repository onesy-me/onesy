import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsActiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveW100Filled'

      short_name='NotificationsActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-212q-6 0-10-4t-4-10q0-6 4-10t10-4h46v-328q0-77 49.5-135T446-774v-20q0-14 10-24t24-10q14 0 24 10t10 24v20q75 13 124.5 71T688-568v328h46q6 0 10 4t4 10q0 6-4 10t-10 4H226Zm254 100q-25 0-42.5-17.5T420-172h120q0 25-17.5 42.5T480-112ZM158-569q-6 0-10-4.5t-4-11.5q4-74 37-137t87-107q5-5 11.5-5t10.5 5q4 5 2 11t-7 10q-49 40-78.5 97T173-587q-1 7-4.5 12.5T158-569Zm644 0q-7 0-10.5-5.5T787-587q-4-67-33.5-124T675-808q-5-4-7-10t2-11q4-5 10.5-5t11.5 5q54 44 87 107t37 137q0 7-4 11.5t-10 4.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveW100Filled.displayName = 'OnesyIconMaterialNotificationsActiveW100Filled';

export default IconMaterialNotificationsActiveW100Filled;
