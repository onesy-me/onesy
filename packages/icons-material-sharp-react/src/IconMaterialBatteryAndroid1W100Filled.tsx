import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid1W100Filled'

      short_name='BatteryAndroid1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-290h508v-380H240v380Zm-108 28v-436h644v144h52v148h-52v144H132Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid1W100Filled.displayName = 'OnesyIconMaterialBatteryAndroid1W100Filled';

export default IconMaterialBatteryAndroid1W100Filled;
