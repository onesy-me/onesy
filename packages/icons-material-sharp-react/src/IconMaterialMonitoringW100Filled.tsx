import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitoringW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitoringW100Filled'

      short_name='Monitoring'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m120-146-9-9 63-62v71h-54Zm186 0v-203l28-28v231h-28Zm160 0v-231l28 29v202h-28Zm160 0v-202l28-28v230h-28Zm160 0v-363l28-28v391h-28ZM146-390v-39l254-254 160 160 254-254v39L560-484 400-644 146-390Z"/>
    </Icon>
  );
});

IconMaterialMonitoringW100Filled.displayName = 'OnesyIconMaterialMonitoringW100Filled';

export default IconMaterialMonitoringW100Filled;
