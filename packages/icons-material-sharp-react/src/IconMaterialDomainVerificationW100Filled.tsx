import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainVerificationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationW100Filled'

      short_name='DomainVerification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-336 190-190-20-20-170 170-86-86-20 20 106 106ZM160-640h640v-80H160v80Zm-28 428v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationW100Filled.displayName = 'OnesyIconMaterialDomainVerificationW100Filled';

export default IconMaterialDomainVerificationW100Filled;
