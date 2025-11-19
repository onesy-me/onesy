import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidAlert'

      short_name='BatteryAndroidAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-470h80v-160h-80v160ZM160-290h560v-380H160v380Zm-80 80v-540h720v170h80v200h-80v170H80Zm80-80v-380 380Zm240-40h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidAlert.displayName = 'OnesyIconMaterialBatteryAndroidAlert';

export default IconMaterialBatteryAndroidAlert;
