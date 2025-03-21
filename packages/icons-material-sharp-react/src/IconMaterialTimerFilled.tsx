import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerFilled'

      short_name='Timer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialTimerFilled.displayName = 'OnesyIconMaterialTimerFilled';

export default IconMaterialTimerFilled;
