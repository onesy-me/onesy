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
      <path d="M120 856V296q0-33 23.5-56.5T200 216h280q17 0 28.5 11.5T520 256h80q33 0 56.5 23.5T680 336v200q0 17-11.5 28.5T640 576q-17 0-28.5-11.5T600 536V336h-80v560q0 17-11.5 28.5T480 936H80q-17 0-28.5-11.5T40 896q0-17 11.5-28.5T80 856h40Zm240-240q17 0 28.5-11.5T400 576q0-17-11.5-28.5T360 536q-17 0-28.5 11.5T320 576q0 17 11.5 28.5T360 616Zm350 250 32 70q5 12 18 12t18-12l32-70 70-32q12-5 12-18t-12-18l-70-32-32-70q-5-12-18-12t-18 12l-32 70-70 32q-12 5-12 18t12 18l70 32Z"/>
    </Icon>
  );
});

IconMaterialAutoMeetingRoomFilled.displayName = 'OnesyIconMaterialAutoMeetingRoomFilled';

export default IconMaterialAutoMeetingRoomFilled;
