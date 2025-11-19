import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidAlertW100'

      short_name='BatteryAndroidAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-452h28v-158h-28v158ZM160-290h588v-380H160v380Zm-28 28v-436h644v144h52v148h-52v144H132Zm28-28v-380 380Zm254-60h52v-52h-52v52Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidAlertW100.displayName = 'OnesyIconMaterialBatteryAndroidAlertW100';

export default IconMaterialBatteryAndroidAlertW100;
