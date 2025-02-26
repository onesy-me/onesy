import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraFrontW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontW100'

      short_name='VideoCameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M301-356h248v-2q0-28-35.5-47T425-424q-53 0-88.5 19T301-358v2Zm124-140q23 0 38.5-15.5T479-550q0-23-15.5-38.5T425-604q-23 0-38.5 15.5T371-550q0 23 15.5 38.5T425-496ZM157-212v-536h536v248l110-110v260L693-460v248H157Zm28-28h480v-480H185v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontW100.displayName = 'OnesyIconMaterialVideoCameraFrontW100';

export default IconMaterialVideoCameraFrontW100;
