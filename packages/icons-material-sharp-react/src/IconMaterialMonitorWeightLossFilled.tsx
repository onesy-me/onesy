import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitorWeightLossFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightLossFilled'

      short_name='MonitorWeightLoss'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-240h320v80H600v-80ZM480-480q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM120-120v-720h720v414q-20-7-40-10.5t-40-3.5q-100 0-170 70t-70 170q0 20 3.5 40t10.5 40H120Zm280-460v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightLossFilled.displayName = 'OnesyIconMaterialMonitorWeightLossFilled';

export default IconMaterialMonitorWeightLossFilled;
