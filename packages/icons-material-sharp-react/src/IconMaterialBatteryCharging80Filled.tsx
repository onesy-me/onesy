import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging80Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging80Filled'

      short_name='BatteryCharging80'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v320q-100 1-170 70.5T440-240q0 46 16 87t45 73H280Zm80-480h240v-160H360v160ZM660-80v-120H560l140-200v120h100L660-80Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging80Filled.displayName = 'OnesyIconMaterialBatteryCharging80Filled';

export default IconMaterialBatteryCharging80Filled;
