import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryStatusGoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryStatusGoodW100Filled'

      short_name='BatteryStatusGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m638-150-77-76 20-20 57 57 141-141 20 19-161 161Zm-312 18v-643h90v-53h128v53h90v305q-7 2-13.5 3t-13.5 3q-72 23-117.5 83.5T444-242q0 29 7 56.5t21 53.5H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGoodW100Filled.displayName = 'OnesyIconMaterialBatteryStatusGoodW100Filled';

export default IconMaterialBatteryStatusGoodW100Filled;
