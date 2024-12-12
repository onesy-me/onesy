import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging60 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging60'

      short_name='BatteryCharging60'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v320q-100 1-170 70.5T440-240q0 46 16 87t45 73H280Zm80-400h240v-240H360v240ZM660-80v-120H560l140-200v120h100L660-80Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging60.displayName = 'OnesyIconMaterialBatteryCharging60';

export default IconMaterialBatteryCharging60;
