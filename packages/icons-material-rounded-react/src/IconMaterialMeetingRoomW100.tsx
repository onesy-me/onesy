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
      <path d="M212-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-558q0-12.75 8.51-21.38 8.51-8.62 21.09-8.62h236.82q12.58 0 21.08 8.62 8.5 8.63 8.5 21.38v10h78q12.75 0 21.38 8.62Q682-730.75 682-718v518h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-63.51q-13.49 0-21.99-8.63-8.5-8.62-8.5-21.37v-518h-80v518q0 12.75-8.62 21.37Q556.75-172 544-172H212Zm94-588v560-560Zm188 280q0-11-8.5-19.5T466-508q-11 0-19.5 8.5T438-480q0 11 8.5 19.5T466-452q11 0 19.5-8.5T494-480ZM306-200h240v-560H306v560Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomW100.displayName = 'OnesyIconMaterialMeetingRoomW100';

export default IconMaterialMeetingRoomW100;
