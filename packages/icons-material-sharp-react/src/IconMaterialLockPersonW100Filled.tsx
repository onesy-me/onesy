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
      <path d="M700-260q25 0 42.5-17.5T760-320q0-25-17.5-42.5T700-380q-25 0-42.5 17.5T640-320q0 25 17.5 42.5T700-260Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T601-193q17 25 43 39t56 14Zm0 28q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM360-588h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Zm152 456H212v-456h120v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h120v106q-12-5-24-5h-25q-94 0-160.5 66.5T472-259.67q0 34.67 9 67.67t31 60Z"/>
    </Icon>
  );
});

IconMaterialLockPersonW100Filled.displayName = 'OnesyIconMaterialLockPersonW100Filled';

export default IconMaterialLockPersonW100Filled;
