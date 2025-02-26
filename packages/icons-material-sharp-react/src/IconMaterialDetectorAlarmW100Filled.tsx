import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorAlarmW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorAlarmW100Filled'

      short_name='DetectorAlarm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-172v-148h28v148h-28Zm297-123L658-399l20-20 104 105-19 19Zm-566 0-19-19 104-105 20 20-105 104Zm97-357 30 80h312l30-80H294Zm9 108-39-108h-92v-136h616v136h-92l-42 108H303Z"/>
    </Icon>
  );
});

IconMaterialDetectorAlarmW100Filled.displayName = 'OnesyIconMaterialDetectorAlarmW100Filled';

export default IconMaterialDetectorAlarmW100Filled;
