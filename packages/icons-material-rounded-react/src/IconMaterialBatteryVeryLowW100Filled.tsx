import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryVeryLowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVeryLowW100Filled'

      short_name='BatteryVeryLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M215-326q-12.75 0-21.37-8.63Q185-343.25 185-356v-60h-23q-12.75 0-21.37-8.63Q132-433.25 132-446v-68q0-12.75 8.63-21.38Q149.25-544 162-544h23v-60.21q0-12.79 8.63-21.29 8.62-8.5 21.37-8.5h583q12.75 0 21.38 8.62Q828-616.75 828-604v247.83q0 13.17-8.62 21.67-8.63 8.5-21.38 8.5H215Zm-3-28h548v-252H212v252Z"/>
    </Icon>
  );
});

IconMaterialBatteryVeryLowW100Filled.displayName = 'OnesyIconMaterialBatteryVeryLowW100Filled';

export default IconMaterialBatteryVeryLowW100Filled;
