import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheck'

      short_name='SafetyCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm20-208 60 60q6 6 6 14t-6 14q-6 6-14 6t-14-6l-60-60q-6-6-9-13.5t-3-15.5v-91q0-8 6-14t14-6q8 0 14 6t6 14v92ZM480-84q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Zm0-80q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheck.displayName = 'OnesyIconMaterialSafetyCheck';

export default IconMaterialSafetyCheck;
