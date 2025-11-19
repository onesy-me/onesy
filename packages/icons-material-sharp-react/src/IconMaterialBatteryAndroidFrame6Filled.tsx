import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFrame6Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFrame6Filled'

      short_name='BatteryAndroidFrame6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360v-240h480v240H160ZM40-240v-480h780v480H40Zm80-80h620v-320H120v320Zm740-60v-200h60v200h-60Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFrame6Filled.displayName = 'OnesyIconMaterialBatteryAndroidFrame6Filled';

export default IconMaterialBatteryAndroidFrame6Filled;
