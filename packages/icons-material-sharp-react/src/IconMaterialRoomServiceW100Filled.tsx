import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoomServiceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceW100Filled'

      short_name='RoomService'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M144-284v-28h672v28H144Zm28-88q0-115 81-197.5T452-666v-48h56v48q118 14 199 96.5T788-372H172Z"/>
    </Icon>
  );
});

IconMaterialRoomServiceW100Filled.displayName = 'OnesyIconMaterialRoomServiceW100Filled';

export default IconMaterialRoomServiceW100Filled;
