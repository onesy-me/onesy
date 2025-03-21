import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockClockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClockW100Filled'

      short_name='LockClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-588h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm-88 456q-24.75 0-42.37-17.63Q212-167.25 212-192v-336q0-24.75 17.63-42.38Q247.25-588 272-588h60v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h60q24.75 0 42.38 17.62Q748-552.75 748-528v13q0 12.64-10 20.82T715-487h-16q-94 0-160.5 66.5T472-260q0 23.94 4.5 47.47Q481-189 491-167q5 12-1 23.5T471-132H272Zm428 20q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm14-153.58V-360q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v94q0 5.57 2 10.78 2 5.22 7 10.22l61 61q4 4 9.5 4.5T776-184q5-5 5-10t-5-10l-62-61.58Z"/>
    </Icon>
  );
});

IconMaterialLockClockW100Filled.displayName = 'OnesyIconMaterialLockClockW100Filled';

export default IconMaterialLockClockW100Filled;
