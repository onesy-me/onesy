import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoomService = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomService'

      short_name='RoomService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 9.58c-2.95 0-5.47 1.83-6.5 4.41h13c-1.03-2.58-3.55-4.41-6.5-4.41z" opacity=".3"/><path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21zM12 9.58c2.95 0 5.47 1.83 6.5 4.41h-13c1.03-2.58 3.55-4.41 6.5-4.41z"/>
    </Icon>
  );
});

IconMaterialRoomService.displayName = 'OnesyIconMaterialRoomService';

export default IconMaterialRoomService;
