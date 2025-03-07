import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldMoon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldMoon'

      short_name='ShieldMoon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M501-320q38 0 74.5-16t63.5-48q7-8 3-18t-14-12q-38-6-72-28.5T501-502q-20-35-23.5-75.5T488-656q4-10-2.5-18t-17.5-6q-69 13-109 65t-40 115q0 75 53.5 127.5T501-320ZM480-84q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Zm0-80q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/>
    </Icon>
  );
});

IconMaterialShieldMoon.displayName = 'OnesyIconMaterialShieldMoon';

export default IconMaterialShieldMoon;
