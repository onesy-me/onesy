import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitorWeightGainFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightGainFilled'

      short_name='MonitorWeightGain'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-40v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM480-480q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM120-120v-720h720v414q-20-7-40-10.5t-40-3.5q-100 0-170 70t-70 170q0 20 3.5 40t10.5 40H120Zm280-460v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightGainFilled.displayName = 'OnesyIconMaterialMonitorWeightGainFilled';

export default IconMaterialMonitorWeightGainFilled;
