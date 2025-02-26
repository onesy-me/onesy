import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBack'

      short_name='DoorBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v-640h560v640h80v80H120Zm160-80h400v-560H280v560Zm120-240q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM280-760v560-560Z"/>
    </Icon>
  );
});

IconMaterialDoorBack.displayName = 'OnesyIconMaterialDoorBack';

export default IconMaterialDoorBack;
