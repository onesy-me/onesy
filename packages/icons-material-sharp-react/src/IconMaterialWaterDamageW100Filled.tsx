import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterDamageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageW100Filled'

      short_name='WaterDamage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-212v-373L109-480l-17-22 388-286 389 286-17 22-144-106v374H252Zm228-134q23 0 38.5-15.5T534-400q0-17-9.5-35T480-504q-37 54-45.5 70t-8.5 34q0 23 15.5 38.5T480-346Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageW100Filled.displayName = 'OnesyIconMaterialWaterDamageW100Filled';

export default IconMaterialWaterDamageW100Filled;
