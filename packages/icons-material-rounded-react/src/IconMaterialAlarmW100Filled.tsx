import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmW100Filled'

      short_name='Alarm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-446v-180q0-6-4-10t-10-4q-6 0-10 4t-4 10v180q0 6 2 11t7 10l125 125q4 4 9.5 4.5T620-300q5-5 5-10t-5-10L494-446Zm-14 314q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24ZM120-670q-5-5-5-10t5-10l110-110q4-4 9.5-4.5T250-800q5 5 5 10t-5 10L140-670q-4 4-9.5 4.5T120-670Zm720 0q-5 5-10 5t-10-5L710-780q-4-4-4.5-9.5T710-800q5-5 10-5t10 5l110 110q4 4 4.5 9.5T840-670Z"/>
    </Icon>
  );
});

IconMaterialAlarmW100Filled.displayName = 'OnesyIconMaterialAlarmW100Filled';

export default IconMaterialAlarmW100Filled;
