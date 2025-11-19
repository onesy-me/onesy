import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid5W100'

      short_name='BatteryAndroid5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-290h156q14 0 23-9t9-23v-316q0-14-9-23t-23-9H560v380Zm-368 28q-26 0-43-17t-17-43v-316q0-26 17-43t43-17h524q26 0 43 17t17 43v84h12q16 0 28 12t12 28v68q0 17-12 28.5T788-406h-12v84q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid5W100.displayName = 'OnesyIconMaterialBatteryAndroid5W100';

export default IconMaterialBatteryAndroid5W100;
