import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationImportantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationImportantFilled'

      short_name='NotificationImportant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-88h120v88q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm-40-360h80v-200h-80v200Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Z"/>
    </Icon>
  );
});

IconMaterialNotificationImportantFilled.displayName = 'OnesyIconMaterialNotificationImportantFilled';

export default IconMaterialNotificationImportantFilled;
