import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainVerificationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationFilled'

      short_name='DomainVerification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-414-55-55q-12-12-29-12t-29 12q-12 12-12 29t12 29l85 85q12 12 28 12t28-12l169-169q12-12 12-29t-12-29q-12-12-29-12t-29 12L438-414ZM160-640h640v-80H160v80Zm0 480q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationFilled.displayName = 'OnesyIconMaterialDomainVerificationFilled';

export default IconMaterialDomainVerificationFilled;
