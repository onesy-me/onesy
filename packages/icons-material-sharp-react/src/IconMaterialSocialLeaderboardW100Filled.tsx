import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSocialLeaderboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialLeaderboardW100Filled'

      short_name='SocialLeaderboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M299-172q-69 0-118-49t-49-118q0-69 49-118t118-49q10 0 20 1.5t20 3.5L216-748h164l100 200 100-200h164L622-504q9-2 18.5-3t19.5-1q70 0 119 49t49 119q0 70-49 119t-119 49q-12 0-24.5-1.5T612-179q45-16 60.5-63t15.5-98q0-87-60.5-147.5T480-548q-87 0-147.5 60.5T272-340q0 51 14.5 99t61.5 62q-12 4-24 5.5t-25 1.5Zm181 12q-75 0-127.5-52.5T300-340q0-75 52.5-127.5T480-520q75 0 127.5 52.5T660-340q0 75-52.5 127.5T480-160Zm-59-94 59-45 59 45-22-73 59-42h-73l-23-77-23 77h-73l59 42-22 73Z"/>
    </Icon>
  );
});

IconMaterialSocialLeaderboardW100Filled.displayName = 'OnesyIconMaterialSocialLeaderboardW100Filled';

export default IconMaterialSocialLeaderboardW100Filled;
