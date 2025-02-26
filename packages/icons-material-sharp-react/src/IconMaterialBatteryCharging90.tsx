import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging90 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging90'

      short_name='BatteryCharging90'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v320q-100 1-170 70.5T440-240q0 46 16 87t45 73H280Zm80-560h240v-80H360v80ZM660-80v-120H560l140-200v120h100L660-80Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging90.displayName = 'OnesyIconMaterialBatteryCharging90';

export default IconMaterialBatteryCharging90;
