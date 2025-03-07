import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inbox'

      short_name='Inbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q32 0 59-16.5t44-43.5q6-9 15-14.5t20-5.5h142v-360H200v360h142q11 0 20 5.5t15 14.5q17 27 44 43.5t59 16.5ZM200-200h560-560Z"/>
    </Icon>
  );
});

IconMaterialInbox.displayName = 'OnesyIconMaterialInbox';

export default IconMaterialInbox;
