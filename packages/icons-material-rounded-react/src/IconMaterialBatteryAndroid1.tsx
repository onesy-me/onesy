import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroid1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroid1'

      short_name='BatteryAndroid1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-290h480v-380H240v380Zm-80 80q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroid1.displayName = 'OnesyIconMaterialBatteryAndroid1';

export default IconMaterialBatteryAndroid1;
