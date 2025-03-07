import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsPausedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsPausedFilled'

      short_name='NotificationsPaused'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm74-240q15 0 25.5-10.5T590-356q0-15-10.5-25.5T554-392h-74l102-126q4-5 6-11t2-12v-23q0-15-10.5-25.5T554-600H406q-15 0-25.5 10.5T370-564q0 15 10.5 25.5T406-528h74L378-402q-4 5-6 11t-2 12v23q0 15 10.5 25.5T406-320h148Z"/>
    </Icon>
  );
});

IconMaterialNotificationsPausedFilled.displayName = 'OnesyIconMaterialNotificationsPausedFilled';

export default IconMaterialNotificationsPausedFilled;
