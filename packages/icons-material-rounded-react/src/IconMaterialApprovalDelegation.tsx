import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApprovalDelegation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalDelegation'

      short_name='ApprovalDelegation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m517-631 199-198q11-11 27.5-11.5T772-829q11 11 11 28t-11 28L545-546q-12 12-28 12t-28-12L375-660q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l85 85Zm41 487 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-57-19q-16-5-23-20t-2-31q5-16 19.5-23.5T450-346l42 14q17 5 38.5 8t58.5 4h11q0-11-6.5-21T578-354l-234-86h-64v220l278 76Zm-21 78-257-72q-8 26-31.5 42T200-80h-80q-33 0-56.5-23.5T40-160v-280q0-33 23.5-56.5T120-520h224q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87q0 22-11.5 34.5T833-145L583-67q-11 4-23 4t-23-3Zm-417-94h80v-280h-80v280Z"/>
    </Icon>
  );
});

IconMaterialApprovalDelegation.displayName = 'OnesyIconMaterialApprovalDelegation';

export default IconMaterialApprovalDelegation;
