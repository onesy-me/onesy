import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorBattery = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorBattery'

      short_name='DetectorBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200h320v-120H360v120Zm-120 80q-17 0-28.5-11.5T200-160v-200q0-17 11.5-28.5T240-400h480q17 0 28.5 11.5T760-360v40h40q17 0 28.5 11.5T840-280v40q0 17-11.5 28.5T800-200h-40v40q0 17-11.5 28.5T720-120H240Zm-40-640v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm12 120q-26 0-47-15.5T260-576l-20-64h-40q-33 0-56.5-23.5T120-720v-40q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v40q0 33-23.5 56.5T760-640h-40l-26 68q-9 23-29 37.5T620-520H336ZM200-760v40-40Z"/>
    </Icon>
  );
});

IconMaterialDetectorBattery.displayName = 'OnesyIconMaterialDetectorBattery';

export default IconMaterialDetectorBattery;
