import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditNotifications = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotifications'

      short_name='EditNotifications'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm280-120H200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q10 2 19 4.5t17 7.5q14 8 21 22.5t0 29.5q-7 15-21.5 21.5t-29.5.5q-22-9-36-11.5t-30-2.5q-66 0-113 47t-47 113v280h320v-80q0-20 12.5-30t27.5-10q15 0 27.5 10t12.5 30v80h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200ZM480-440Zm0-40v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T823-660L615-452q-6 6-13.5 9t-15.5 3h-66q-17 0-28.5-11.5T480-480Zm300-223-37-37 37 37ZM540-500h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
    </Icon>
  );
});

IconMaterialEditNotifications.displayName = 'OnesyIconMaterialEditNotifications';

export default IconMaterialEditNotifications;
