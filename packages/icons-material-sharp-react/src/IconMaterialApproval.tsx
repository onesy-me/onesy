import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApproval = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Approval'

      short_name='Approval'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-320h640v320H160Zm80-160h480v-80H240v80Zm240-160L280-680q0-83 58.5-141.5T480-880q83 0 141.5 58.5T680-680L480-400Zm0-112 120-168q0-50-35-85t-85-35q-50 0-85 35t-35 85l120 168Zm0-144Z"/>
    </Icon>
  );
});

IconMaterialApproval.displayName = 'OnesyIconMaterialApproval';

export default IconMaterialApproval;
