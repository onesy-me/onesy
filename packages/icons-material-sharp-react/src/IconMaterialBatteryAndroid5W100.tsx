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
      <path d="M560-290h188v-380H560v380Zm-428 28v-436h644v144h52v148h-52v144H132Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid5W100.displayName = 'OnesyIconMaterialBatteryAndroid5W100';

export default IconMaterialBatteryAndroid5W100;
