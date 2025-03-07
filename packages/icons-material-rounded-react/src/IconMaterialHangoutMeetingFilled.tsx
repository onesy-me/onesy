import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHangoutMeetingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutMeetingFilled'

      short_name='HangoutMeeting'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M380 656h160q17 0 28.5-11.5T580 616v-30l80 50V436l-80 50v-30q0-17-11.5-28.5T540 416H380q-17 0-28.5 11.5T340 456v160q0 17 11.5 28.5T380 656Zm100 360V876q-73 0-138.5-27.5t-114.5-74q-49-46.5-78-108T120 536q0-75 28.5-140.5t77-114.5q48.5-49 114-77T480 176q75 0 140.5 28T735 281q49 49 77 114.5T840 536q0 138-96 266t-264 214Z"/>
    </Icon>
  );
});

IconMaterialHangoutMeetingFilled.displayName = 'OnesyIconMaterialHangoutMeetingFilled';

export default IconMaterialHangoutMeetingFilled;
