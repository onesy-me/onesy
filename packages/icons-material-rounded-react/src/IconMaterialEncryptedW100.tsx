import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEncryptedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedW100'

      short_name='Encrypted'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M463-386h34q6.75 0 11.88-5.63Q514-397.25 512-404l-19-104q17-5 28.5-19.64T533-560q0-21.86-15.6-37.43Q501.81-613 479.9-613q-21.9 0-37.4 15.57T427-560q0 17.72 11.5 32.36T467-508l-19 104q-2 6.75 3.13 12.37Q456.25-386 463-386Zm17 247q-5 0-11-1t-11.02-3Q345-188 278.5-291.5 212-395 212-516v-166q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v166q0 121-66.5 224.5T502.02-143q-5.02 2-11.02 3t-11 1Zm0-25q104-33 172-132t68-220v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18v167q0 121 68 220t172 132Zm0-314Z"/>
    </Icon>
  );
});

IconMaterialEncryptedW100.displayName = 'OnesyIconMaterialEncryptedW100';

export default IconMaterialEncryptedW100;
