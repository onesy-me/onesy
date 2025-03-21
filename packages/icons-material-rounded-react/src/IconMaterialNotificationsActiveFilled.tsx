import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsActiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveFilled'

      short_name='NotificationsActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM120-560q-17 0-28.5-13T82-603q8-75 42-139.5T211-855q13-11 29.5-10t26.5 15q10 14 8 30t-15 28q-39 37-64 86t-33 106q-2 17-14 28.5T120-560Zm720 0q-17 0-29-11.5T797-600q-8-57-33-106t-64-86q-13-12-15-28t8-30q10-14 26.5-15t29.5 10q53 48 87 112.5T878-603q2 17-9.5 30T840-560Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveFilled.displayName = 'OnesyIconMaterialNotificationsActiveFilled';

export default IconMaterialNotificationsActiveFilled;
