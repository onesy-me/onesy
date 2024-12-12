import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeaderboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Leaderboard'

      short_name='Leaderboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200h160v-320H160v320Zm240 0h160v-560H400v560Zm240 0h160v-240H640v240ZM80-120v-480h240v-240h320v320h240v400H80Z"/>
    </Icon>
  );
});

IconMaterialLeaderboard.displayName = 'OnesyIconMaterialLeaderboard';

export default IconMaterialLeaderboard;
