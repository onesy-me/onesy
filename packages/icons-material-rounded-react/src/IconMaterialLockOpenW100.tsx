import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenW100'

      short_name='LockOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-25 0-42.5-17.5T212-192v-336q0-25 17.5-42.5T272-588h328v-80q0-50-35-85t-85-35q-46 0-80 30.5T361-682q-1 6-5 10t-10 4q-6 0-10-4.5t-3-10.5q5-57 47-95t100-38q62 0 105 43t43 105v80h60q25 0 42.5 17.5T748-528v336q0 25-17.5 42.5T688-132H272Zm0-28h416q14 0 23-9t9-23v-336q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v336q0 14 9 23t23 9Zm208-146q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306ZM240-160v-400 400Z"/>
    </Icon>
  );
});

IconMaterialLockOpenW100.displayName = 'OnesyIconMaterialLockOpenW100';

export default IconMaterialLockOpenW100;
