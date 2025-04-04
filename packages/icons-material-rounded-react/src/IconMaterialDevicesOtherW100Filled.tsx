import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesOtherW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOtherW100Filled'

      short_name='DevicesOther'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-416q0-24.75 17.63-42.38Q167.25-748 192-748h542q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h60q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-60Zm242-68q25 0 42.5-17.5T494-340q0-25-17.5-42.5T434-400q-25 0-42.5 17.5T374-340q0 25 17.5 42.5T434-280Zm364 68H632q-12.75 0-21.37-8.63Q602-229.25 602-242v-328q0-12.75 8.63-21.38Q619.25-600 632-600h166q12.75 0 21.38 8.62Q828-582.75 828-570v328q0 12.75-8.62 21.37Q810.75-212 798-212Zm-412-30.42V-266q-18-12-29-31.5T346-340q0-23 11-42.5t29-31.5v-23.58q0-12.93 8.63-21.67Q403.25-468 416-468h36q12.75 0 21.38 8.75 8.62 8.74 8.62 21.67V-414q18 12 29 31.5t11 42.5q0 23-11 42.5T482-266v23.58q0 12.93-8.62 21.67Q464.75-212 452-212h-36q-12.75 0-21.37-8.75-8.63-8.74-8.63-21.67Z"/>
    </Icon>
  );
});

IconMaterialDevicesOtherW100Filled.displayName = 'OnesyIconMaterialDevicesOtherW100Filled';

export default IconMaterialDevicesOtherW100Filled;
