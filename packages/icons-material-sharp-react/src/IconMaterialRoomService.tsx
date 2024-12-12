import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoomService = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomService'

      short_name='RoomService'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-80h800v80H80Zm40-120v-40q0-128 78.5-226T400-710v-90h160v90q124 26 202 124t78 226v40H120Zm82-80h556q-14-104-93-172t-185-68q-106 0-184.5 68T202-400Zm278 0Z"/>
    </Icon>
  );
});

IconMaterialRoomService.displayName = 'OnesyIconMaterialRoomService';

export default IconMaterialRoomService;
