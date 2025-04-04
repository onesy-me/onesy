import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockPersonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockPersonW100Filled'

      short_name='LockPerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-260q25 0 42.5-17.5T760-320q0-25-17.5-42.5T700-380q-25 0-42.5 17.5T640-320q0 25 17.5 42.5T700-260Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T601-193q17 25 43 39t56 14ZM360-588h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm-88 456q-24.75 0-42.37-17.63Q212-167.25 212-192v-336q0-24.75 17.63-42.38Q247.25-588 272-588h60v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h60q24.75 0 42.38 17.62Q748-552.75 748-528v13q0 12.64-10 20.82T715-487h-16q-94 0-160.5 66.5T472-260q0 23.94 4.5 47.47Q481-189 491-167q5 12-1 23.5T471-132H272Zm428 20q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialLockPersonW100Filled.displayName = 'OnesyIconMaterialLockPersonW100Filled';

export default IconMaterialLockPersonW100Filled;
