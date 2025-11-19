import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidPlusW100'

      short_name='BatteryAndroidPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-366h28v-100h100v-28H454v-100h-28v100H326v28h100v100Zm-266 76h588v-380H160v380Zm-28 28v-436h644v144h52v148h-52v144H132Zm28-28v-380 380Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidPlusW100.displayName = 'OnesyIconMaterialBatteryAndroidPlusW100';

export default IconMaterialBatteryAndroidPlusW100;
