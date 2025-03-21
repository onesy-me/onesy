import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsNightSightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsNightSightW100Filled'

      short_name='SettingsNightSight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M668-132q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm-5-57q27 1 48-13t39-34q-27-5-49-16t-36-34q-14-23-12-47.5t11-50.5q-32 7-55.5 21.5T574-318q-9 25-5 48.5t21 44.5q14 17 32 26.5t41 9.5Zm-247 57-14-112q-25-7-47.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-24.5T230-479q0-13 1.5-26t3.5-26l-89-67 64-110 102 43q20-17 42-30t47-21l15-112h128l14 113q24 8 45.5 20.5T644-665l106-43 64 110-74 56q-18-5-36-7.5t-36-2.5q-30 0-58.5 7.5T554-524q-11-20-32-32t-44-12q-37 0-62.5 25.5T390-480q0 23 11.5 43.5T433-404q-14 31-19 64t-5 67q3 38 16.5 74.5T463-132h-47Z"/>
    </Icon>
  );
});

IconMaterialSettingsNightSightW100Filled.displayName = 'OnesyIconMaterialSettingsNightSightW100Filled';

export default IconMaterialSettingsNightSightW100Filled;
