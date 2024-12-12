import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffW100Filled'

      short_name='TimerOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-120 698-222q-41 42-98.5 66T480-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-62 23-118t67-100L120-800l20-20 680 680-20 20ZM380-866v-28h200v28H380Zm380 553L494-579v-41h-28v13L353-720q29-14 62-21t65-7q56 0 109 20.5t98 59.5l40-40 20 20-40 40q39 45 60 98.5T788-440q0 32-7 65t-21 62Z"/>
    </Icon>
  );
});

IconMaterialTimerOffW100Filled.displayName = 'OnesyIconMaterialTimerOffW100Filled';

export default IconMaterialTimerOffW100Filled;
