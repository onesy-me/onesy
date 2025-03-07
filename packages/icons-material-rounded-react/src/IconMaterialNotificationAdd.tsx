import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAdd'

      short_name='NotificationAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q10 2 19 4.5t17 7.5q14 8 21 22.5t0 29.5q-7 15-21.5 21.5t-29.5.5q-22-9-36-11.5t-30-2.5q-66 0-113 47t-47 113v280h320v-80q0-20 12.5-30t27.5-10q15 0 27.5 10t12.5 30v80h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200Zm520-360h-80q-17 0-28.5-11.5T600-600q0-17 11.5-28.5T640-640h80v-80q0-17 11.5-28.5T760-760q17 0 28.5 11.5T800-720v80h80q17 0 28.5 11.5T920-600q0 17-11.5 28.5T880-560h-80v80q0 17-11.5 28.5T760-440q-17 0-28.5-11.5T720-480v-80Zm-240 60Z"/>
    </Icon>
  );
});

IconMaterialNotificationAdd.displayName = 'OnesyIconMaterialNotificationAdd';

export default IconMaterialNotificationAdd;
