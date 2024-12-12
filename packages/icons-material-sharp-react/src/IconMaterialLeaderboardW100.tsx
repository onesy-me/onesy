import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeaderboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardW100'

      short_name='Leaderboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200h195v-320H160v320Zm223 0h194v-560H383v560Zm222 0h195v-240H605v240Zm-473 28v-376h223v-240h250v320h223v296H132Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardW100.displayName = 'OnesyIconMaterialLeaderboardW100';

export default IconMaterialLeaderboardW100;
