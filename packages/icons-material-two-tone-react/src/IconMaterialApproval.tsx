import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApproval = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Approval'

      short_name='Approval'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" opacity=".3" width="12" x="6" y="16"/><path d="M12,4c-1.66,0-3,1.34-3,3l3,4l3-4C15,5.34,13.66,4,12,4z" opacity=".3"/><path d="M12,2C9.24,2,7,4.24,7,7l5,7l5-7C17,4.24,14.76,2,12,2z M12,11L9,7c0-1.66,1.34-3,3-3s3,1.34,3,3L12,11z"/><path d="M18,14h-6H6c-1.1,0-2,0.9-2,2v6h16v-6C20,14.9,19.1,14,18,14z M18,18H6v-2h12V18z"/></g></g>
    </Icon>
  );
});

IconMaterialApproval.displayName = 'OnesyIconMaterialApproval';

export default IconMaterialApproval;
