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
      <path d="M360-588h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm-88 456q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h60v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h60q26 0 43 17t17 43v24q0 7-4.5 10.5T734-490q-5 0-9.5-3.5T720-504v-24q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v336q0 14 9 23t23 9h227q6 0 10 4t4 10q0 6-4 10t-10 4H272Zm428 20q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm14-154v-94q0-6-4-10t-10-4q-6 0-10 4t-4 10v94q0 6 2 11t7 10l61 61q4 4 9.5 4.5T776-184q5-5 5-10t-5-10l-62-62Zm-474 6v100-400 300Z"/>
    </Icon>
  );
});

IconMaterialLockClockW100.displayName = 'OnesyIconMaterialLockClockW100';

export default IconMaterialLockClockW100;
