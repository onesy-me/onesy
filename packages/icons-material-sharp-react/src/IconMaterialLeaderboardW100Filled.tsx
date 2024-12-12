import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeaderboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardW100Filled'

      short_name='Leaderboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-376h150v376H172Zm223 0v-616h170v616H395Zm243 0v-296h150v296H638Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardW100Filled.displayName = 'OnesyIconMaterialLeaderboardW100Filled';

export default IconMaterialLeaderboardW100Filled;
