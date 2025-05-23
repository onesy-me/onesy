import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPunchClockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockFilled'

      short_name='PunchClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h40v-120q0-33 23.5-56.5T320-920h320q33 0 56.5 23.5T720-840v120h40q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm120-640h320v-120H320v120Zm160 500q75 0 127.5-52.5T660-400q0-75-52.5-127.5T480-580q-75 0-127.5 52.5T300-400q0 75 52.5 127.5T480-220Zm20-188v-72q0-8-6-14t-14-6q-8 0-14 6t-6 14v71q0 8 3 15.5t9 13.5l40 40q6 6 14 6t14-6q6-6 6-14t-6-14l-40-40Z"/>
    </Icon>
  );
});

IconMaterialPunchClockFilled.displayName = 'OnesyIconMaterialPunchClockFilled';

export default IconMaterialPunchClockFilled;
