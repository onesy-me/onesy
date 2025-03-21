import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenW100Filled'

      short_name='LockOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-24.75 0-42.37-17.63Q212-167.25 212-192v-336q0-24.75 17.63-42.38Q247.25-588 272-588h328v-80q0-50-35-85t-85-35q-45.6 0-79.8 30.5Q366-727 361-682q-1.24 6.32-5.12 10.16t-9.5 3.84q-6.38 0-10.38-4.5-4-4.5-3-10.5 5-57 47-95t100-38q62 0 105 43t43 105v80h60q24.75 0 42.38 17.62Q748-552.75 748-528v336q0 24.75-17.62 42.37Q712.75-132 688-132H272Zm208-174q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306Z"/>
    </Icon>
  );
});

IconMaterialLockOpenW100Filled.displayName = 'OnesyIconMaterialLockOpenW100Filled';

export default IconMaterialLockOpenW100Filled;
