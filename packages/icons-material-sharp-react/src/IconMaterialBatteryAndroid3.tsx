import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid3'

      short_name='BatteryAndroid3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-290h320v-380H400v380ZM80-210v-540h720v170h80v200h-80v170H80Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid3.displayName = 'OnesyIconMaterialBatteryAndroid3';

export default IconMaterialBatteryAndroid3;
