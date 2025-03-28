import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoMeetingRoom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoom'

      short_name='NoMeetingRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5H8.12L12 8.88V6zM7 19h5v-4.46l-5-5z" opacity=".3"/><path d="M12 5v3.88l2 2V6h3v7.88l2 2V4h-5V3H6.12l2 2zM2.41 2.13L1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41L2.41 2.13zM12 19H7V9.54l5 5V19z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoom.displayName = 'OnesyIconMaterialNoMeetingRoom';

export default IconMaterialNoMeetingRoom;
