import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockClock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClock'

      short_name='LockClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560q0 20-12.5 30T760-520q-15 0-27.5-10T720-560H240v400h200q17 0 28.5 11.5T480-120q0 17-11.5 28.5T440-80H240Zm480 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l60 60q6 6 14 6t14-6q6-6 6-14t-6-14l-60-60ZM240-560v400-400Z"/>
    </Icon>
  );
});

IconMaterialLockClock.displayName = 'OnesyIconMaterialLockClock';

export default IconMaterialLockClock;
