import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMissedVideoCallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallFilled'

      short_name='MissedVideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h640v260l160-160v440L720-420v260H80Zm348-160 180-182-56-56-124 124-88-86h60v-80H200v200h80v-68l148 148Z"/>
    </Icon>
  );
});

IconMaterialMissedVideoCallFilled.displayName = 'OnesyIconMaterialMissedVideoCallFilled';

export default IconMaterialMissedVideoCallFilled;
