import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryShareW100Filled'

      short_name='BatteryShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M434-306v-148h255l-89-90 20-19 123 123-123 123-20-20 90-89H462v120h-28ZM326-132v-643h90v-53h128v53h90v132h-28v-105H354v588h252v-77h28v105H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryShareW100Filled.displayName = 'OnesyIconMaterialBatteryShareW100Filled';

export default IconMaterialBatteryShareW100Filled;
