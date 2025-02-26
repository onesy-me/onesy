import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldW100'

      short_name='Shield'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-139q-5 0-11-1t-11.02-3Q345-188 278.5-291.5 212-395 212-516v-166q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v166q0 121-66.5 224.5T502.02-143q-5.02 2-11.02 3t-11 1Zm0-25q104-33 172-132t68-220v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18v167q0 121 68 220t172 132Zm0-314Z"/>
    </Icon>
  );
});

IconMaterialShieldW100.displayName = 'OnesyIconMaterialShieldW100';

export default IconMaterialShieldW100;
