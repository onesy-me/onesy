import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidBoltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidBoltW100'

      short_name='BatteryAndroidBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-360h16l144-144H459l21-96h-16L320-456h101l-21 96Zm-240 70h588v-380H160v380Zm-28 28v-436h644v144h52v148h-52v144H132Zm28-28v-380 380Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidBoltW100.displayName = 'OnesyIconMaterialBatteryAndroidBoltW100';

export default IconMaterialBatteryAndroidBoltW100;
