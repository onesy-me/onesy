import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFullFilled'

      short_name='BatteryAndroidFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-210v-540h720v170h80v200h-80v170H80Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFullFilled.displayName = 'OnesyIconMaterialBatteryAndroidFullFilled';

export default IconMaterialBatteryAndroidFullFilled;
