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
      <path d="M720-160h-80q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h80v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80h80q17 0 28.5 11.5T920-200q0 17-11.5 28.5T880-160h-80v80q0 17-11.5 28.5T760-40q-17 0-28.5-11.5T720-80v-80Zm-520-40v-560 560Zm280-520q-50 0-85 35t-35 85q0 50 35 85t85 35q50 0 85-35t35-85q0-50-35-85t-85-35Zm-60 100q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6Zm60 0q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6Zm60 0q8 0 14 6t6 14q0 8-6 14t-14 6q-8 0-14-6t-6-14q0-8 6-14t14-6ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280q0 17-11.5 28.5T800-440q-17 0-28.5-11.5T760-480v-280H200v560h300q17 0 28.5 11.5T540-160q0 17-11.5 28.5T500-120H200Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightGain.displayName = 'OnesyIconMaterialMonitorWeightGain';

export default IconMaterialMonitorWeightGain;
