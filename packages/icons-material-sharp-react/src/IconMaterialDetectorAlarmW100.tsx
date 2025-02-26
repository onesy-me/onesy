import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorAlarmW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorAlarmW100'

      short_name='DetectorAlarm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-172v-148h28v148h-28Zm297-123L658-399l20-20 104 105-19 19Zm-566 0-19-19 104-105 20 20-105 104Zm3-465v80h560v-80H200Zm94 108 30 80h312l30-80H294Zm9 108-39-108h-92v-136h616v136h-92l-42 108H303ZM200-760v80-80Z"/>
    </Icon>
  );
});

IconMaterialDetectorAlarmW100.displayName = 'OnesyIconMaterialDetectorAlarmW100';

export default IconMaterialDetectorAlarmW100;
