import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Outbox'

      short_name='Outbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-566-35 35q-12 12-28.5 11.5T348-532q-11-12-11.5-28t11.5-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q12 12 11.5 28T612-532q-12 12-28.5 12.5T555-531l-35-35v126q0 17-11.5 28.5T480-400q-17 0-28.5-11.5T440-440v-126ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q32 0 59-16.5t44-43.5q6-9 15-14.5t20-5.5h142v-360H200v360h142q11 0 20 5.5t15 14.5q17 27 44 43.5t59 16.5ZM200-200h560-560Z"/>
    </Icon>
  );
});

IconMaterialOutbox.displayName = 'OnesyIconMaterialOutbox';

export default IconMaterialOutbox;
