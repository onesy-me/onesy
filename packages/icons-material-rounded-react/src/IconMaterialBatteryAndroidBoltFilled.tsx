import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAndroidBoltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAndroidBoltFilled'

      short_name='BatteryAndroidBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-330h20l180-180H463l27-120h-20L290-450h127l-27 120ZM160-210q-33 0-56.5-23.5T80-290v-380q0-33 23.5-56.5T160-750h560q33 0 56.5 23.5T800-670v90h20q25 0 42.5 17.5T880-520v80q0 26-17.5 43T820-380h-20v90q0 33-23.5 56.5T720-210H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryAndroidBoltFilled.displayName = 'OnesyIconMaterialBatteryAndroidBoltFilled';

export default IconMaterialBatteryAndroidBoltFilled;
