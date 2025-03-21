import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainVerificationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationW100'

      short_name='DomainVerification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-368H160v368q0 12 10 22t22 10Zm246-136 160-160q4-4 9.5-4.5T618-536q5 5 5 10t-5 10L459-357q-9 9-21 9t-21-9l-75-75q-4-4-4.5-9.5T342-452q5-5 10-5t10 5l76 76ZM192-240h-32v-480h32q-12 0-22 10t-10 22v416q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationW100.displayName = 'OnesyIconMaterialDomainVerificationW100';

export default IconMaterialDomainVerificationW100;
