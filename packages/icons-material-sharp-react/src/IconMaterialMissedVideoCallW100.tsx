import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMissedVideoCallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallW100'

      short_name='MissedVideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M157-212v-536h536v248l110-110v260L693-460v248H157Zm28-28h480v-480H185v480Zm0 0v-480 480Zm270-116 144-146-20-20-124 126-152-152h100v-28H255v148h28v-100l172 172Z"/>
    </Icon>
  );
});

IconMaterialMissedVideoCallW100.displayName = 'OnesyIconMaterialMissedVideoCallW100';

export default IconMaterialMissedVideoCallW100;
