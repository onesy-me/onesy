import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpen'

      short_name='DoorOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-120v-80l240-40v-481l-240-39v-80l320 52v614l-320 54Zm-160 0v-80h80v-640h560v640h80v80H120Zm160-80h400v-560H280v560Z"/>
    </Icon>
  );
});

IconMaterialDoorOpen.displayName = 'OnesyIconMaterialDoorOpen';

export default IconMaterialDoorOpen;
