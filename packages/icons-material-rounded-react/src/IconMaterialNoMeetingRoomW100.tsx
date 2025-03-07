import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoMeetingRoomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoomW100'

      short_name='NoMeetingRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m656-416-28-28v-276h-80v196l-28-28v-208H314l-28-28h232q13 0 21.5 8.5T548-758v10h78q13 0 21.5 8.5T656-718v302Zm110 262L548-372v170q0 13-8.5 21.5T518-172H186q-6 0-10-4t-4-10q0-6 4-10t10-4h66v-468l-98-98q-4-4-4.5-9.5T154-786q5-5 10-5t10 5l612 612q4 4 4.5 9.5T786-154q-5 5-10 5t-10-5Zm-486-46h240v-200L280-640v440Zm137-456Zm-17 136Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoomW100.displayName = 'OnesyIconMaterialNoMeetingRoomW100';

export default IconMaterialNoMeetingRoomW100;
