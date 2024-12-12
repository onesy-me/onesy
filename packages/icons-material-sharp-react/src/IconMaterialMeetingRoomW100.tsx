import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMeetingRoomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoomW100'

      short_name='MeetingRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M198-172v-28h80v-588h296v40h108v548h80v28H654v-548h-80v548H198Zm108-588v560-560Zm160 308q11 0 19.5-8.5T494-480q0-11-8.5-19.5T466-508q-11 0-19.5 8.5T438-480q0 11 8.5 19.5T466-452ZM306-200h240v-560H306v560Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomW100.displayName = 'OnesyIconMaterialMeetingRoomW100';

export default IconMaterialMeetingRoomW100;
