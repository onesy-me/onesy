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
      <path d="M360-506h240q6 0 10-4t4-10q0-6-4-10t-10-4H360q-6 0-10 4t-4 10q0 6 4 10t10 4ZM192-252q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H588v50q0 13-8.5 21.5T558-172H402q-13 0-21.5-8.5T372-202v-50H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialRemoveFromQueueW100.displayName = 'OnesyIconMaterialRemoveFromQueueW100';

export default IconMaterialRemoveFromQueueW100;
