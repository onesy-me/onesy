import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkSetup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkSetup'

      short_name='PhonelinkSetup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v40h400v-40H280Zm394-210q-8-3-14-6.5t-12-9.5l-30 13q-7 3-14 .5t-11-9.5l-22-39q-4-7-2.5-14t7.5-12l26-19q-2-8-2-15t2-15l-25-19q-6-5-7.5-12.5T572-542l23-38q4-6 11-8.5t14 .5l28 12q6-5 12-8t14-6l4-32q1-8 6.5-13t13.5-5h44q8 0 13.5 5t6.5 13l4 32q8 3 14 6t12 8l28-12q7-3 14-.5t11 8.5l23 38q4 7 2.5 14.5T863-515l-25 19q2 8 2 15t-2 15l26 19q6 5 7.5 12t-2.5 14l-22 39q-4 7-11 9.5t-14-.5l-30-13q-6 6-12 9.5t-14 6.5l-4 32q-1 8-6.5 13t-13.5 5h-44q-8 0-13.5-5t-6.5-13l-4-32Zm46-50q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM280-800h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Zm0 120q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v120q0 17-11.5 28.5T720-680q-17 0-28.5-11.5T680-720H280v480h400q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240v120q0 33-23.5 56.5T680-40H280Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkSetup.displayName = 'OnesyIconMaterialPhonelinkSetup';

export default IconMaterialPhonelinkSetup;
