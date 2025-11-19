import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid5Filled'

      short_name='BatteryAndroid5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-290h160v-380H560v380Zm-400 80q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid5Filled.displayName = 'OnesyIconMaterialBatteryAndroid5Filled';

export default IconMaterialBatteryAndroid5Filled;
