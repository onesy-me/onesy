import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmPauseW100Filled'

      short_name='AlarmPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.06-132Q416-132 360-156t-98-66q-42-42-66-97.94-24-55.95-24-120Q172-504 196-560t66-98q42-42 97.94-66 55.95-24 120-24Q544-748 600-724t98 66q42 42 66 97.94 24 55.95 24 120Q788-376 764-320t-66 98q-42 42-97.94 66-55.95 24-120 24ZM240-810l20 20-130 130-20-20 130-130Zm480 0 130 130-20 20-130-130 20-20ZM402-306h28v-268h-28v268Zm128 0h28v-268h-28v268Z"/>
    </Icon>
  );
});

IconMaterialAlarmPauseW100Filled.displayName = 'OnesyIconMaterialAlarmPauseW100Filled';

export default IconMaterialAlarmPauseW100Filled;
