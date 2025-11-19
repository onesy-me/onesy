import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid1'

      short_name='BatteryAndroid1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-290h480v-380H240v380ZM80-210v-540h720v170h80v200h-80v170H80Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid1.displayName = 'OnesyIconMaterialBatteryAndroid1';

export default IconMaterialBatteryAndroid1;
