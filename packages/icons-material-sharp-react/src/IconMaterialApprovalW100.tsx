import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApprovalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalW100'

      short_name='Approval'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-220h536v220H212Zm28-108h480v-84H240v84Zm240-112L332-630v-10q0-62 43-105t105-43q62 0 105 43t43 105v10L480-432Zm0-47 120-161q0-50-35-85t-85-35q-50 0-85 35t-35 85l120 161Zm0-141Z"/>
    </Icon>
  );
});

IconMaterialApprovalW100.displayName = 'OnesyIconMaterialApprovalW100';

export default IconMaterialApprovalW100;
