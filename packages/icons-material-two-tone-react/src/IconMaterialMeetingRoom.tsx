import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMeetingRoom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoom'

      short_name='MeetingRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 19h6V5H7v14zm3-8h2v2h-2v-2z" opacity=".3"/><path d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14zm-3-8h2v2h-2z"/>
    </Icon>
  );
});

IconMaterialMeetingRoom.displayName = 'OnesyIconMaterialMeetingRoom';

export default IconMaterialMeetingRoom;
