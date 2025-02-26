import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoMeetingRoom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoom'

      short_name='NoMeetingRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m760-314-80-80v-326h-80v246l-80-80v-206H314l-80-80h366v40h160v486Zm32 258L600-248v128H120v-80h80v-448L56-792l56-56 736 736-56 56ZM280-200h240v-128L280-568v368Zm137-457Zm-17 209Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoom.displayName = 'OnesyIconMaterialNoMeetingRoom';

export default IconMaterialNoMeetingRoom;
