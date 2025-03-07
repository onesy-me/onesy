import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmAddW100Filled'

      short_name='AlarmAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-426v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-106q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v106H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106Zm14.06 294Q416-132 360-156t-98-66q-42-42-66-97.94-24-55.95-24-120Q172-504 196-560t66-98q42-42 97.94-66 55.95-24 120-24Q544-748 600-724t98 66q42 42 66 97.94 24 55.95 24 120Q788-376 764-320t-66 98q-42 42-97.94 66-55.95 24-120 24ZM120-670q-5-5-5-10t5-10l110-110q4-4 9.5-4.5T250-800q5 5 5 10t-5 10L140-670q-4 4-9.5 4.5T120-670Zm720 0q-5 5-10 5t-10-5L710-780q-4-4-4.5-9.5T710-800q5-5 10-5t10 5l110 110q4 4 4.5 9.5T840-670Z"/>
    </Icon>
  );
});

IconMaterialAlarmAddW100Filled.displayName = 'OnesyIconMaterialAlarmAddW100Filled';

export default IconMaterialAlarmAddW100Filled;
