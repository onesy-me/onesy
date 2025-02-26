import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOnW100Filled'

      short_name='AlarmOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-334 190-190-20-20-170 170-86-86-20 20 106 106Zm42 202q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24ZM240-810l20 20-130 130-20-20 130-130Zm480 0 130 130-20 20-130-130 20-20Z"/>
    </Icon>
  );
});

IconMaterialAlarmOnW100Filled.displayName = 'OnesyIconMaterialAlarmOnW100Filled';

export default IconMaterialAlarmOnW100Filled;
