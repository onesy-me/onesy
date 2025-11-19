import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFrame3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFrame3Filled'

      short_name='BatteryAndroidFrame3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360v-240h240v240H160ZM40-240v-480h780v480H40Zm80-80h620v-320H120v320Zm740-60v-200h60v200h-60Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFrame3Filled.displayName = 'OnesyIconMaterialBatteryAndroidFrame3Filled';

export default IconMaterialBatteryAndroidFrame3Filled;
