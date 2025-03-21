import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsActiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveFilled'

      short_name='NotificationsActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-88h120v88q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveFilled.displayName = 'OnesyIconMaterialNotificationsActiveFilled';

export default IconMaterialNotificationsActiveFilled;
