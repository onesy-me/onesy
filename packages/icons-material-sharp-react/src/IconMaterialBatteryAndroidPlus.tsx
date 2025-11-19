import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidPlus'

      short_name='BatteryAndroidPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-340h80v-100h100v-80H480v-100h-80v100H300v80h100v100Zm-240 50h560v-380H160v380Zm-80 80v-540h720v170h80v200h-80v170H80Zm80-80v-380 380Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidPlus.displayName = 'OnesyIconMaterialBatteryAndroidPlus';

export default IconMaterialBatteryAndroidPlus;
