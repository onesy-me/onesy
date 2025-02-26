import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorBatteryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorBatteryFilled'

      short_name='DetectorBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200h320v-120H360v120Zm-160 80v-280h560v80h80v120h-80v80H200Zm124-520 12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Z"/>
    </Icon>
  );
});

IconMaterialDetectorBatteryFilled.displayName = 'OnesyIconMaterialDetectorBatteryFilled';

export default IconMaterialDetectorBatteryFilled;
