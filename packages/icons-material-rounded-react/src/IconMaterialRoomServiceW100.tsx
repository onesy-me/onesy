import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoomServiceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceW100'

      short_name='RoomService'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M158-284q-6 0-10-4t-4-10q0-6 4-10t10-4h644q6 0 10 4t4 10q0 6-4 10t-10 4H158Zm14-88q0-115 81-197.5T452-666v-20q0-11 8.5-19.5T480-714q11 0 19.5 8.5T508-686v20q118 14 199 96.5T788-372H172Zm31-28h554q-8-96-89-167t-188-71q-107 0-188 71t-89 167Zm277 0Z"/>
    </Icon>
  );
});

IconMaterialRoomServiceW100.displayName = 'OnesyIconMaterialRoomServiceW100';

export default IconMaterialRoomServiceW100;
