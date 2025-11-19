import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid0 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid0'

      short_name='BatteryAndroid0'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-290h560v-380H160v380Zm0 80q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid0.displayName = 'OnesyIconMaterialBatteryAndroid0';

export default IconMaterialBatteryAndroid0;
