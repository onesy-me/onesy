import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryErrorW100Filled'

      short_name='BatteryError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m641-132-19-19 84-84-84-84 19-19 84 84 84-84 19 19-83 84 83 84-19 19-84-83-84 83Zm-315 0v-643h90v-53h128v53h90v325q-65 28-103.5 86T492-235q0 27 5.5 53t17.5 50H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryErrorW100Filled.displayName = 'OnesyIconMaterialBatteryErrorW100Filled';

export default IconMaterialBatteryErrorW100Filled;
