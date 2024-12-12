import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMissedVideoCallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallW100Filled'

      short_name='MissedVideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M157-212v-536h536v248l110-110v260L693-460v248H157Zm298-144 144-146-20-20-124 126-152-152h100v-28H255v148h28v-100l172 172Z"/>
    </Icon>
  );
});

IconMaterialMissedVideoCallW100Filled.displayName = 'OnesyIconMaterialMissedVideoCallW100Filled';

export default IconMaterialMissedVideoCallW100Filled;
