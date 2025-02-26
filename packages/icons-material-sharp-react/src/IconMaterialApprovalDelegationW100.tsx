import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApprovalDelegationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalDelegationW100'

      short_name='ApprovalDelegation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M517-518 384-651l20-19 113 113 227-226 19 19-246 246Zm44 428-312-92v50H113v-292h236l286 104v60h193v88L561-90Zm-420-70h80v-236h-80v236Zm418 40 241-73v-39H525l-124-40 10-27 117 39h79v-40l-262-96h-96v184l310 92Z"/>
    </Icon>
  );
});

IconMaterialApprovalDelegationW100.displayName = 'OnesyIconMaterialApprovalDelegationW100';

export default IconMaterialApprovalDelegationW100;
