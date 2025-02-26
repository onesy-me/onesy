import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging20Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging20Filled'

      short_name='BatteryCharging20'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-80v-120H560l140-200v120h100L660-80Zm-380 0v-720h120v-80h160v80h120v320q-21 0-41 3.5T600-466v-254H360v480h80q0 46 16 87t45 73H280Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging20Filled.displayName = 'OnesyIconMaterialBatteryCharging20Filled';

export default IconMaterialBatteryCharging20Filled;
