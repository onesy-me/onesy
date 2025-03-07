import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolicy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Policy'

      short_name='Policy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-84q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 75-23.5 146.5T709-240q-8 11-21.5 11.5T664-238L560-342q-18 11-38.5 16.5T480-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 22-5.5 42.5T618-398l60 60q20-41 31-86t11-92v-189l-240-90-240 90v189q0 121 68 220t172 132q16-5 31.5-12t30.5-16q14-8 30.5-6t26.5 16q10 14 6.5 30T588-127q-20 12-40 21.5T505-88q-6 2-12 3t-13 1Zm0-316q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm8-77Z"/>
    </Icon>
  );
});

IconMaterialPolicy.displayName = 'OnesyIconMaterialPolicy';

export default IconMaterialPolicy;
