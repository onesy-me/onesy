import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeaderboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeaderboardFilled'

      short_name='Leaderboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-17 0-28.5-11.5T80-160v-400q0-17 11.5-28.5T120-600h140q17 0 28.5 11.5T300-560v400q0 17-11.5 28.5T260-120H120Zm290 0q-17 0-28.5-11.5T370-160v-640q0-17 11.5-28.5T410-840h140q17 0 28.5 11.5T590-800v640q0 17-11.5 28.5T550-120H410Zm290 0q-17 0-28.5-11.5T660-160v-320q0-17 11.5-28.5T700-520h140q17 0 28.5 11.5T880-480v320q0 17-11.5 28.5T840-120H700Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardFilled.displayName = 'OnesyIconMaterialLeaderboardFilled';

export default IconMaterialLeaderboardFilled;
