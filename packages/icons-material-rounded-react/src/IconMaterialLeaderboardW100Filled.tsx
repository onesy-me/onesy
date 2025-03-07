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
      <path d="M202-172q-12.75 0-21.37-8.63Q172-189.25 172-202v-315.59q0-13.41 8.63-21.91 8.62-8.5 21.37-8.5h90q12.75 0 21.38 8.62Q322-530.75 322-518v315.59q0 13.41-8.62 21.91-8.63 8.5-21.38 8.5h-90Zm223.32 0q-13.32 0-21.82-8.63-8.5-8.62-8.5-21.37v-556q0-12.75 8.63-21.38Q412.25-788 425-788h109.68q13.32 0 21.82 8.62 8.5 8.63 8.5 21.38v556q0 12.75-8.62 21.37Q547.75-172 535-172H425.32ZM668-172q-12.75 0-21.37-8.51-8.63-8.51-8.63-21.09v-236.82q0-12.58 8.63-21.08 8.62-8.5 21.37-8.5h90q12.75 0 21.38 8.51 8.62 8.51 8.62 21.09v236.82q0 12.58-8.62 21.08-8.63 8.5-21.38 8.5h-90Z"/>
    </Icon>
  );
});

IconMaterialLeaderboardW100Filled.displayName = 'OnesyIconMaterialLeaderboardW100Filled';

export default IconMaterialLeaderboardW100Filled;
