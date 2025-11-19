import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid4'

      short_name='BatteryAndroid4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-290h240v-380H480v380ZM80-210v-540h720v170h80v200h-80v170H80Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid4.displayName = 'OnesyIconMaterialBatteryAndroid4';

export default IconMaterialBatteryAndroid4;
