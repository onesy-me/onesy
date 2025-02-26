import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorBatteryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorBatteryW100Filled'

      short_name='DetectorBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240h320v-120H360v120Zm-108 28v-176h456v54h40v68h-40v54H252Zm42-440 30 80h312l30-80H294Zm9 108-39-108h-92v-136h616v136h-92l-42 108H303Z"/>
    </Icon>
  );
});

IconMaterialDetectorBatteryW100Filled.displayName = 'OnesyIconMaterialDetectorBatteryW100Filled';

export default IconMaterialDetectorBatteryW100Filled;
