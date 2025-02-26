import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryProfile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfile'

      short_name='BatteryProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160Zm-80 80v-720h120v-80h160v80h120v240q-21 0-41 3t-39 9v-172H360v560h68q11 23 25 43t32 37H280Zm360 0-12-60q-12-5-22.5-11T585-165l-58 20-40-69 45-40q-2-15-2-25.5t2-25.5l-45-40 40-69 58 20q10-8 20.5-14.5T628-420l12-60h80l12 60q12 5 22.5 11t20.5 14l58-20 40 69-45 40q2 15 2 25.5t-2 25.5l45 40-40 69-58-19q-10 8-20.5 14T732-140l-12 60h-80Zm40-120q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200Z"/>
    </Icon>
  );
});

IconMaterialBatteryProfile.displayName = 'OnesyIconMaterialBatteryProfile';

export default IconMaterialBatteryProfile;
