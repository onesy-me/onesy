import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldLocked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLocked'

      short_name='ShieldLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 20-12.5 30T760-476q-17 0-28.5-11T720-516v-189l-240-90-240 90v189q0 121 68 220t172 132q11-4 23-9.5t23-10.5q15-7 31-1t23 21q7 15 1 31t-21 23q-11 5-24.5 10.5T511-89q-6 2-12.5 3.5T485-84q-7 0-13-1.5T460-89q-135-45-215.5-166T160-516ZM674-80q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T760-400q33 0 56.5 23.5T840-320v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H674Zm46-200h80v-40q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320v40ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialShieldLocked.displayName = 'OnesyIconMaterialShieldLocked';

export default IconMaterialShieldLocked;
