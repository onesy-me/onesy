import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldLockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLockedFilled'

      short_name='ShieldLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-80v-200h40v-40q0-33 23.5-56.5T760-400q33 0 56.5 23.5T840-320v40h40v200H640Zm80-200h80v-40q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320v40ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 10-.5 20t-1.5 20q-9-2-18.5-3t-19.5-1q-83 0-141.5 58T560-280v170q-19 10-39 17.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialShieldLockedFilled.displayName = 'OnesyIconMaterialShieldLockedFilled';

export default IconMaterialShieldLockedFilled;
