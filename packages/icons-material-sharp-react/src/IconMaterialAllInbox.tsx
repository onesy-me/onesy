import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllInbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInbox'

      short_name='AllInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h480v-120H698q-21 37-58 58.5T560-360q-42 0-79-21.5T422-440H320v120Zm240-120q34 0 57-23.5t23-56.5h160v-280H320v280h160q0 33 23.5 56.5T560-440ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm240-240h480-480Z"/>
    </Icon>
  );
});

IconMaterialAllInbox.displayName = 'OnesyIconMaterialAllInbox';

export default IconMaterialAllInbox;
