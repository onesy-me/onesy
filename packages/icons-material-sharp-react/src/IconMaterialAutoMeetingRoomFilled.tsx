import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoMeetingRoomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoMeetingRoomFilled'

      short_name='AutoMeetingRoom'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 936v-80h80V216h400v40h160v320h-80V336h-80v600H40Zm320-320q17 0 28.5-11.5T400 576q0-17-11.5-28.5T360 536q-17 0-28.5 11.5T320 576q0 17 11.5 28.5T360 616Zm400 360 50-110 110-50-110-50-50-110-50 110-110 50 110 50 50 110Z"/>
    </Icon>
  );
});

IconMaterialAutoMeetingRoomFilled.displayName = 'OnesyIconMaterialAutoMeetingRoomFilled';

export default IconMaterialAutoMeetingRoomFilled;
