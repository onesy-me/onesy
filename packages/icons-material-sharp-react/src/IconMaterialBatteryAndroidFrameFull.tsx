import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFrameFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFrameFull'

      short_name='BatteryAndroidFrameFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360v-240h540v240H160ZM40-240v-480h780v480H40Zm80-80h620v-320H120v320Zm740-60v-200h60v200h-60Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFrameFull.displayName = 'OnesyIconMaterialBatteryAndroidFrameFull';

export default IconMaterialBatteryAndroidFrameFull;
