import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenFilled'

      short_name='DoorOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v-640h560v640h80v80H120Zm480-80h80v-560h-80v560ZM440-440q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440Z"/>
    </Icon>
  );
});

IconMaterialDoorOpenFilled.displayName = 'OnesyIconMaterialDoorOpenFilled';

export default IconMaterialDoorOpenFilled;
