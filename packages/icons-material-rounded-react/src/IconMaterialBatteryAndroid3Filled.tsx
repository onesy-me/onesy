import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid3Filled'

      short_name='BatteryAndroid3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-290h320v-380H400v380Zm-240 80q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid3Filled.displayName = 'OnesyIconMaterialBatteryAndroid3Filled';

export default IconMaterialBatteryAndroid3Filled;
