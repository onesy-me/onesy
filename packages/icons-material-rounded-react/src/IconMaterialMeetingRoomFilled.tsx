import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMeetingRoomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoomFilled'

      short_name='MeetingRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-600q0-17 11.5-28.5T240-840h280q17 0 28.5 11.5T560-800h160q17 0 28.5 11.5T760-760v560h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120h-80q-17 0-28.5-11.5T680-160v-560H560v560q0 17-11.5 28.5T520-120H160Zm320-360q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440q17 0 28.5-11.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomFilled.displayName = 'OnesyIconMaterialMeetingRoomFilled';

export default IconMaterialMeetingRoomFilled;
