import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorW100'

      short_name='Monitor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M302-172v-56l28-28H132v-532h696v532H630l28 28v56H302ZM160-284h640v-476H160v476Zm0 0v-476 476Z"/>
    </Icon>
  );
});

IconMaterialMonitorW100.displayName = 'OnesyIconMaterialMonitorW100';

export default IconMaterialMonitorW100;
