import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockPersonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockPersonW100'

      short_name='LockPerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-260q25 0 42.5-17.5T760-320q0-25-17.5-42.5T700-380q-25 0-42.5 17.5T640-320q0 25 17.5 42.5T700-260Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T601-193q17 25 43 39t56 14ZM360-588h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm-88 456q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h60v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h60q26 0 43 17t17 43v24q0 7-4.32 10.5t-9.5 3.5q-5.18 0-9.68-3.5T720-504v-24q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v336q0 14 9 23t23 9h227q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H272Zm428 20q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM240-260v100-400 300Z"/>
    </Icon>
  );
});

IconMaterialLockPersonW100.displayName = 'OnesyIconMaterialLockPersonW100';

export default IconMaterialLockPersonW100;
