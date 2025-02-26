import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveFromQueueW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueueW100'

      short_name='RemoveFromQueue'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-506h268v-28H346v28Zm26 334v-80H132v-536h696v536H588v80H372ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialRemoveFromQueueW100.displayName = 'OnesyIconMaterialRemoveFromQueueW100';

export default IconMaterialRemoveFromQueueW100;
