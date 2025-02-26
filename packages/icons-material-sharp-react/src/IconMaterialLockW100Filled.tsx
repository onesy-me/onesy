import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockW100Filled'

      short_name='Lock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-456h120v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h120v456H212Zm268-174q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306ZM360-588h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/>
    </Icon>
  );
});

IconMaterialLockW100Filled.displayName = 'OnesyIconMaterialLockW100Filled';

export default IconMaterialLockW100Filled;
