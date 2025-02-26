import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToQueueW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueW100'

      short_name='AddToQueue'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-386h28v-120h120v-28H494v-120h-28v120H346v28h120v120Zm-94 214v-80H132v-536h696v536H588v80H372ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueW100.displayName = 'OnesyIconMaterialAddToQueueW100';

export default IconMaterialAddToQueueW100;
