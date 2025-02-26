import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerPauseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerPauseFilled'

      short_name='TimerPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-840v-80h240v80H360ZM480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80ZM360-280h80v-320h-80v320Zm160 0h80v-320h-80v320Z"/>
    </Icon>
  );
});

IconMaterialTimerPauseFilled.displayName = 'OnesyIconMaterialTimerPauseFilled';

export default IconMaterialTimerPauseFilled;
