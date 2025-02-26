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
      <path d="M120-80v-640h120v-200h480v200h120v640H120Zm200-640h320v-120H320v120Zm160 500q75 0 127.5-52.5T660-400q0-75-52.5-127.5T480-580q-75 0-127.5 52.5T300-400q0 75 52.5 127.5T480-220Zm46-106 28-28-54-54v-92h-40v108l66 66Z"/>
    </Icon>
  );
});

IconMaterialPunchClockFilled.displayName = 'OnesyIconMaterialPunchClockFilled';

export default IconMaterialPunchClockFilled;
