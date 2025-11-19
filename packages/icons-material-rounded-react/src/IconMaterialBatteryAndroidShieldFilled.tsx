import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidShieldFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidShieldFilled'

      short_name='BatteryAndroidShield'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-330q67-32 97-100.5T570-574q-35-8-66.5-23.5T440-630q-32 17-63.5 32.5T310-574q3 75 33 143.5T440-330Zm0-70v-160q16 10 32.5 18t33.5 14q-6 37-21.5 70.5T440-400ZM160-210q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidShieldFilled.displayName = 'OnesyIconMaterialBatteryAndroidShieldFilled';

export default IconMaterialBatteryAndroidShieldFilled;
