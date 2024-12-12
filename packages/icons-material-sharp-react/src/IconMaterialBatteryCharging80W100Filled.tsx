import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging80W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging80W100Filled'

      short_name='BatteryCharging80'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-132v-643h90v-53h128v53h90v305q-81 14-135.5 77.5T444-243q0 30 7 58t21 53H326Zm28-416h252v-200H354v200Zm310 441v-101h-50l82-165v101h50l-82 165Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging80W100Filled.displayName = 'OnesyIconMaterialBatteryCharging80W100Filled';

export default IconMaterialBatteryCharging80W100Filled;
