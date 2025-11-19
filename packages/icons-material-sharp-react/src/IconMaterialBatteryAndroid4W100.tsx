import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid4W100'

      short_name='BatteryAndroid4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-290h268v-380H480v380Zm-348 28v-436h644v144h52v148h-52v144H132Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid4W100.displayName = 'OnesyIconMaterialBatteryAndroid4W100';

export default IconMaterialBatteryAndroid4W100;
