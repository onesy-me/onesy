import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApprovalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalFilled'

      short_name='Approval'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-160q0-33 23.5-56.5T240-400h480q33 0 56.5 23.5T800-320v160q0 33-23.5 56.5T720-80H240Zm40-160h400q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320H280q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm167-206L299-653q-9-13-12.5-28.5T285-713q12-73 66-120t129-47q75 0 129 47t66 120q2 16-1.5 31.5T661-653L513-446q-12 17-33 17t-33-17Z"/>
    </Icon>
  );
});

IconMaterialApprovalFilled.displayName = 'OnesyIconMaterialApprovalFilled';

export default IconMaterialApprovalFilled;
