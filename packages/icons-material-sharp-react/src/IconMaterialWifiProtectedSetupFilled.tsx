import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiProtectedSetupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProtectedSetupFilled'

      short_name='WifiProtectedSetup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M627-210q17-33 26-69.5t9-75.5q0-80-35-146.5T532-612l-92 92v-320h320l-92 92q52 47 83 112t31 141q0 91-42.5 165T627-210Zm-427 90 92-92q-53-47-83.5-112T178-465q0-91 42.5-165T334-750q-17 33-26.5 69.5T298-605q0 80 35.5 146.5T428-348l92-92v320H200Z"/>
    </Icon>
  );
});

IconMaterialWifiProtectedSetupFilled.displayName = 'OnesyIconMaterialWifiProtectedSetupFilled';

export default IconMaterialWifiProtectedSetupFilled;
