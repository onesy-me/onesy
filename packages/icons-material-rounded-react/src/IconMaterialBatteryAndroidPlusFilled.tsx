import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidPlusFilled'

      short_name='BatteryAndroidPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-340h80v-100h100v-80H480v-100h-80v100H300v80h100v100ZM160-210q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidPlusFilled.displayName = 'OnesyIconMaterialBatteryAndroidPlusFilled';

export default IconMaterialBatteryAndroidPlusFilled;
