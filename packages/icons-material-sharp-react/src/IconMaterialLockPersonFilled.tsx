import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockPersonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockPersonFilled'

      short_name='LockPerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-240q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T621-173q17 25 43 39t56 14Zm0 80q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM490-80H160v-560h120v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h120v132q-20-7-40-9.5t-40-2.5q-117 0-198.5 81.5T440-240q0 43 13.5 83.5T490-80Z"/>
    </Icon>
  );
});

IconMaterialLockPersonFilled.displayName = 'OnesyIconMaterialLockPersonFilled';

export default IconMaterialLockPersonFilled;
