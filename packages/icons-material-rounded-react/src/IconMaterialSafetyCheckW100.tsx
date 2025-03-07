import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckW100'

      short_name='SafetyCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-331q62 0 105-43t43-105q0-62-43-105t-105-43q-62 0-105 43t-43 105q0 62 43 105t105 43Zm14-153.58L556-423q4 4 4.5 9.5T556-403q-5 5-10 5t-10-5l-61-61q-5-5-7-10.22-2-5.21-2-10.78v-94q0-5.6 4.2-9.8 4.2-4.2 9.8-4.2 5.6 0 9.8 4.2 4.2 4.2 4.2 9.8v94.42ZM480-139q-5 0-11-1t-11.02-3Q345-188 278.5-291.5 212-395 212-516v-166q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v166q0 121-66.5 224.5T502.02-143q-5.02 2-11.02 3t-11 1Zm0-25q104-33 172-132t68-220v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18v167q0 121 68 220t172 132Zm0-314Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckW100.displayName = 'OnesyIconMaterialSafetyCheckW100';

export default IconMaterialSafetyCheckW100;
