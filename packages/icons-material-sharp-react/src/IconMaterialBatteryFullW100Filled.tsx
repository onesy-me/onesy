import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullW100Filled'

      short_name='BatteryFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-132v-643h90v-53h128v53h90v643H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryFullW100Filled.displayName = 'OnesyIconMaterialBatteryFullW100Filled';

export default IconMaterialBatteryFullW100Filled;
