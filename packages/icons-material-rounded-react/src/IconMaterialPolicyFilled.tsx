import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolicyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyFilled'

      short_name='Policy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-84q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 63-16.5 122.5T736-280L618-398q11-19 16.5-39.5T640-480q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47q21 0 41.5-5.5T560-342l129 128q-38 45-83.5 76.5T505-88q-6 2-12 3t-13 1Zm0-316q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialPolicyFilled.displayName = 'OnesyIconMaterialPolicyFilled';

export default IconMaterialPolicyFilled;
