import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoMeetingRoomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoomW100Filled'

      short_name='NoMeetingRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m656-416-28-28v-276h-80v196L286-788h262v40h108v332Zm120 272L548-372v200H172v-28h80v-468L144-776l20-20 632 632-20 20Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoomW100Filled.displayName = 'OnesyIconMaterialNoMeetingRoomW100Filled';

export default IconMaterialNoMeetingRoomW100Filled;
