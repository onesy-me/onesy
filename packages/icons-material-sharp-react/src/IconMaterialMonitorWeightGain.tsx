import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitorWeightGain = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightGain'

      short_name='MonitorWeightGain'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-40v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM200-200v-560 560Zm-80 80v-720h720v400h-80v-320H200v560h320v80H120Zm360-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-80-100v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightGain.displayName = 'OnesyIconMaterialMonitorWeightGain';

export default IconMaterialMonitorWeightGain;
