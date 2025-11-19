import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidAlertFilled'

      short_name='BatteryAndroidAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-330q17 0 28.5-11.5T480-370q0-17-11.5-28.5T440-410q-17 0-28.5 11.5T400-370q0 17 11.5 28.5T440-330Zm-40-140h80v-160h-80v160ZM160-210q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidAlertFilled.displayName = 'OnesyIconMaterialBatteryAndroidAlertFilled';

export default IconMaterialBatteryAndroidAlertFilled;
