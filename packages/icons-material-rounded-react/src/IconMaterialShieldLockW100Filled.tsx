import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLockW100Filled'

      short_name='ShieldLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-338h156q12.75 0 21.38-8.63Q588-355.25 588-368v-116q0-12.75-8.62-21.38Q570.75-514 558-514h-9v-40q0-29-19.5-48.5T481-622q-29 0-48.5 19.5T413-554v40h-11q-12.75 0-21.37 8.62Q372-496.75 372-484v116q0 12.75 8.63 21.37Q389.25-338 402-338Zm39-176v-40q0-17 11.5-28.5T481-594q17 0 28.5 11.5T521-554v40h-80Zm39 375q-5 0-11-1t-11.02-3Q345-188 278.5-291.5 212-395 212-516v-166q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v166q0 121-66.5 224.5T502.02-143q-5.02 2-11.02 3t-11 1Z"/>
    </Icon>
  );
});

IconMaterialShieldLockW100Filled.displayName = 'OnesyIconMaterialShieldLockW100Filled';

export default IconMaterialShieldLockW100Filled;
