import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMeetingRoomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoomW100Filled'

      short_name='MeetingRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-558q0-12.75 8.63-21.38Q295.25-788 308-788h236q12.75 0 21.38 8.62Q574-770.75 574-758v10h78q12.75 0 21.38 8.62Q682-730.75 682-718v518h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-63.51q-13.49 0-21.99-8.63-8.5-8.62-8.5-21.37v-518h-80v518q0 12.75-8.62 21.37Q556.75-172 544-172H212Zm282-308q0-11-8.5-19.5T466-508q-11 0-19.5 8.5T438-480q0 11 8.5 19.5T466-452q11 0 19.5-8.5T494-480Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomW100Filled.displayName = 'OnesyIconMaterialMeetingRoomW100Filled';

export default IconMaterialMeetingRoomW100Filled;
