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
      <path d="M700-112q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm66-62 20-20-72-71.61V-374h-28v120l80 80ZM360-588h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm152 456H212v-456h120v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h120v106q-12-5-24-5h-25q-94 0-160.5 66.5T472-259.67q0 34.67 9 67.67t31 60Z"/>
    </Icon>
  );
});

IconMaterialLockClockW100Filled.displayName = 'OnesyIconMaterialLockClockW100Filled';

export default IconMaterialLockClockW100Filled;
