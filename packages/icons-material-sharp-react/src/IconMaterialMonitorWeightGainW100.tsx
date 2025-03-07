import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitorWeightGainW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightGainW100'

      short_name='MonitorWeightGain'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M746-66v-120H626v-28h120v-120h28v120h120v28H774v120h-28ZM200-200v-560 560Zm-28 28v-616h616v354h-28v-326H200v560h326v28H172Zm308.24-328Q522-500 551-529.24q29-29.23 29-71Q580-642 550.76-671q-29.23-29-71-29Q438-700 409-670.76q-29 29.23-29 71Q380-558 409.24-529q29.23 29 71 29ZM400-580v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightGainW100.displayName = 'OnesyIconMaterialMonitorWeightGainW100';

export default IconMaterialMonitorWeightGainW100;
