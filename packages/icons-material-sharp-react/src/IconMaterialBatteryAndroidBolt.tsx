import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidBolt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidBolt'

      short_name='BatteryAndroidBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-330h20l180-180H463l27-120h-20L290-450h127l-27 120Zm-230 40h560v-380H160v380Zm-80 80v-540h720v170h80v200h-80v170H80Zm80-80v-380 380Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidBolt.displayName = 'OnesyIconMaterialBatteryAndroidBolt';

export default IconMaterialBatteryAndroidBolt;
