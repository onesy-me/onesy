import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid3W100Filled'

      short_name='BatteryAndroid3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-290h348v-380H400v380Zm-268 28v-436h644v144h52v148h-52v144H132Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid3W100Filled.displayName = 'OnesyIconMaterialBatteryAndroid3W100Filled';

export default IconMaterialBatteryAndroid3W100Filled;
