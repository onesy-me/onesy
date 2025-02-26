import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockClockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClockW100'

      short_name='LockClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-588h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm152 456H212v-456h120v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h120v106q-5-2-12.5-3t-15.5-1v-74H240v400h256q2 8 6 15t10 13Zm188 20q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm66-62 20-20-72-72v-108h-28v120l80 80Zm-526-86v100-400 300Z"/>
    </Icon>
  );
});

IconMaterialLockClockW100.displayName = 'OnesyIconMaterialLockClockW100';

export default IconMaterialLockClockW100;
