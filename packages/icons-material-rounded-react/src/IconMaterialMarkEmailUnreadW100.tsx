import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkEmailUnreadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadW100'

      short_name='MarkEmailUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h377q6 0 10.5 4.5T583-733q-1 5-5 9t-9 4H160v448q0 14 9 23t23 9h576q14 0 23-9t9-23v-248q0-6 4-10t10-4q6 0 10 4t4 10v248q0 26-17 43t-43 17H192Zm-32-508v480-480Zm320 200 132-87q6-4 11-2.5t8 6.5q3 5 2.5 10t-6.5 9l-131 87q-8 5-16 5.5t-16-4.5L160-687v-33l320 200Zm280-106q-39 0-66.5-27.5T666-720q0-39 27.5-66.5T760-814q39 0 66.5 27.5T854-720q0 39-27.5 66.5T760-626Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadW100.displayName = 'OnesyIconMaterialMarkEmailUnreadW100';

export default IconMaterialMarkEmailUnreadW100;
