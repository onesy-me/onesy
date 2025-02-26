import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitorWeightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightW100'

      short_name='MonitorWeight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.24-500Q522-500 551-529.24q29-29.23 29-71Q580-642 550.76-671q-29.23-29-71-29Q438-700 409-670.76q-29 29.23-29 71Q380-558 409.24-529q29.23 29 71 29ZM400-580v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightW100.displayName = 'OnesyIconMaterialMonitorWeightW100';

export default IconMaterialMonitorWeightW100;
