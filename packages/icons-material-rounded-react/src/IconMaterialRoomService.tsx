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
      <path d="M120-200q-17 0-28.5-11.5T80-240q0-17 11.5-28.5T120-280h720q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200H120Zm0-120v-40q0-128 78.5-226T400-710v-10q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720v10q124 26 202 124t78 226v40H120Zm82-80h556q-14-104-93-172t-185-68q-106 0-184.5 68T202-400Zm278 0Z"/>
    </Icon>
  );
});

IconMaterialRoomService.displayName = 'OnesyIconMaterialRoomService';

export default IconMaterialRoomService;
