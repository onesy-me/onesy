import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApprovalDelegationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalDelegationFilled'

      short_name='ApprovalDelegation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M517-518 347-688l57-56 113 113 227-226 56 56-283 283ZM40-80v-440h160v440H40Zm520 0-280-79v-361h79l321 120v80H520l-70-27-14 37 84 30h360v80L560-80Z"/>
    </Icon>
  );
});

IconMaterialApprovalDelegationFilled.displayName = 'OnesyIconMaterialApprovalDelegationFilled';

export default IconMaterialApprovalDelegationFilled;
