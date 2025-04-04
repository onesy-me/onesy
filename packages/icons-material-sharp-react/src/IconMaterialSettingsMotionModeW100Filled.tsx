import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsMotionModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsMotionModeW100Filled'

      short_name='SettingsMotionMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M668-132v-320q13 0 25 2t23 6v304q-11 4-23 6t-25 2Zm-80-22v-276q11-7 23-11.5t25-7.5v314q-13-3-25-7.5T588-154Zm160 0v-276q36 21 58 57t22 81q0 45-22 81t-58 57Zm-192-24q-22-22-35-51t-13-63q0-34 13-63t35-51v228Zm-140 46-14-112q-25-7-47.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-24.5T230-479q0-13 1.5-26t3.5-26l-89-67 64-110 102 43q20-17 42-30t47-21l15-112h128l14 113q24 8 45.5 20.5T644-665l106-43 64 110-74 56q-18-5-36-7.5t-36-2.5q-30 0-58.5 7.5T554-524q-11-20-32-32t-44-12q-37 0-62.5 25.5T390-480q0 23 11.5 43.5T433-404q-14 31-19 64t-5 67q3 38 16.5 74.5T463-132h-47Z"/>
    </Icon>
  );
});

IconMaterialSettingsMotionModeW100Filled.displayName = 'OnesyIconMaterialSettingsMotionModeW100Filled';

export default IconMaterialSettingsMotionModeW100Filled;
