import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid5'

      short_name='BatteryAndroid5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-290h160v-380H560v380ZM80-210v-540h720v170h80v200h-80v170H80Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid5.displayName = 'OnesyIconMaterialBatteryAndroid5';

export default IconMaterialBatteryAndroid5;
