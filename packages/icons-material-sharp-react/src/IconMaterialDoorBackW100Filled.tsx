import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackW100Filled'

      short_name='DoorBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h80v-588h456v588h80v28H172Zm216-280q11 0 19.5-8.5T416-480q0-11-8.5-19.5T388-508q-11 0-19.5 8.5T360-480q0 11 8.5 19.5T388-452Z"/>
    </Icon>
  );
});

IconMaterialDoorBackW100Filled.displayName = 'OnesyIconMaterialDoorBackW100Filled';

export default IconMaterialDoorBackW100Filled;
