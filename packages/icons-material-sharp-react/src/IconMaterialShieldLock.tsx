import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLock'

      short_name='ShieldLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316ZM360-320h240v-200h-40v-40q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560v40h-40v200Zm80-200v-40q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560v40h-80Z"/>
    </Icon>
  );
});

IconMaterialShieldLock.displayName = 'OnesyIconMaterialShieldLock';

export default IconMaterialShieldLock;
