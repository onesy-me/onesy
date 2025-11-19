import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid6W100Filled'

      short_name='BatteryAndroid6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-290h108v-380H640v380Zm-508 28v-436h644v144h52v148h-52v144H132Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid6W100Filled.displayName = 'OnesyIconMaterialBatteryAndroid6W100Filled';

export default IconMaterialBatteryAndroid6W100Filled;
