import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryProfileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileW100Filled'

      short_name='BatteryProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-132v-643h90v-53h128v53h90v260q-94 8-157.5 77.5T413-273q0 38 12 74t34 67H326Zm317 0-2-27q-26-5-42-15t-30-25l-24 13-18-24 23-18q-9-24-9-46t9-46l-23-18 18-24 24 13q14-15 30-25t42-15l2-27h28l2 27q26 5 42 15t30 25l24-13 18 24-23 18q9 24 9 46t-9 46l23 18-18 24-24-13q-14 15-30 25t-42 15l-2 27h-28Zm14-54q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Z"/>
    </Icon>
  );
});

IconMaterialBatteryProfileW100Filled.displayName = 'OnesyIconMaterialBatteryProfileW100Filled';

export default IconMaterialBatteryProfileW100Filled;
