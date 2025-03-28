import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerPlayW100Filled'

      short_name='TimerPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-866v-28h200v28H380Zm100 734q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q57 0 110.5 21t97.5 59l40-40 20 20-40 40q38 44 59 97.5T788-440q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm-60-196 168-112-168-112v224Z"/>
    </Icon>
  );
});

IconMaterialTimerPlayW100Filled.displayName = 'OnesyIconMaterialTimerPlayW100Filled';

export default IconMaterialTimerPlayW100Filled;
