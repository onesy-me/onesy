import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorbell3pFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Doorbell3pFilled'

      short_name='Doorbell3p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80q-33 0-56.5-23.5T200-160v-640q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v640q0 33-23.5 56.5T680-80H280Zm200-120q33 0 56.5-23.5T560-280q0-33-23.5-56.5T480-360q-33 0-56.5 23.5T400-280q0 33 23.5 56.5T480-200Zm0-40q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm0-180q18 0 29-11t11-29h-80q0 18 11 29t29 11Zm-140-60h280q8 0 14-6t6-14q0-8-6-14t-14-6h-20v-92q0-45-23-80.5T512-740v-12q0-14-9-23t-23-9q-14 0-23 9t-9 23v12q-42 15-65 49t-23 79v92h-20q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialDoorbell3pFilled.displayName = 'OnesyIconMaterialDoorbell3pFilled';

export default IconMaterialDoorbell3pFilled;
