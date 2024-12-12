import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitoringW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitoringW100'

      short_name='Monitoring'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-146v-43l28-28v71h-28Zm160 0v-203l28-28v231h-28Zm160 0v-231l28 29v202h-28Zm160 0v-202l28-28v230h-28Zm160 0v-363l28-28v391h-28ZM146-390v-39l254-254 160 160 254-254v39L560-484 400-644 146-390Z"/>
    </Icon>
  );
});

IconMaterialMonitoringW100.displayName = 'OnesyIconMaterialMonitoringW100';

export default IconMaterialMonitoringW100;
