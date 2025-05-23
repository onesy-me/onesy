import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCircleNotificationsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CircleNotificationsW100Filled'

      short_name='CircleNotifications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-252q18 0 31.5-12.5T528-296h-96q3 19 16.5 31.5T480-252ZM320-364h320v-40h-40v-110q0-48-25.5-87T504-650v-62h-48v62q-45 10-70.5 48T360-516v112h-40v40Zm160-40Zm.17 272q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialCircleNotificationsW100Filled.displayName = 'OnesyIconMaterialCircleNotificationsW100Filled';

export default IconMaterialCircleNotificationsW100Filled;
