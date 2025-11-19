import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidFullW100Filled'

      short_name='BatteryAndroidFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-262q-26 0-43-17t-17-43v-316q0-26 17-43t43-17h524q26 0 43 17t17 43v84h12q16 0 28 12t12 28v68q0 17-12 28.5T788-406h-12v84q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidFullW100Filled.displayName = 'OnesyIconMaterialBatteryAndroidFullW100Filled';

export default IconMaterialBatteryAndroidFullW100Filled;
