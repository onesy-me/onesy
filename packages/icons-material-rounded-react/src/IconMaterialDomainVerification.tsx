import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainVerification = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerification'

      short_name='DomainVerification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm278-174 139-139q12-12 29-12t29 12q12 12 12 29t-12 29L466-326q-12 12-28 12t-28-12l-85-85q-12-12-12-29t12-29q12-12 29-12t29 12l55 55ZM160-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialDomainVerification.displayName = 'OnesyIconMaterialDomainVerification';

export default IconMaterialDomainVerification;
