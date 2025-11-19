import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFrame1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFrame1'

      short_name='BatteryAndroidFrame1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-240v-480h780v480H40Zm80-80h620v-320H120v320Zm740-60v-200h60v200h-60Zm-700 20v-240h80v240h-80Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFrame1.displayName = 'OnesyIconMaterialBatteryAndroidFrame1';

export default IconMaterialBatteryAndroidFrame1;
