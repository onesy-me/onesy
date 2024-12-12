import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenW100'

      short_name='LockOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-456h388v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85h-28q0-62 43-105t105-43q62 0 105 43t43 105v80h120v456H212Zm28-28h480v-400H240v400Zm240-146q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306ZM240-160v-400 400Z"/>
    </Icon>
  );
});

IconMaterialLockOpenW100.displayName = 'OnesyIconMaterialLockOpenW100';

export default IconMaterialLockOpenW100;
