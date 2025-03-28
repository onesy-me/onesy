import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSocialLeaderboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialLeaderboard'

      short_name='SocialLeaderboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q75 0 127.5-52.5T660-340q0-75-52.5-127.5T480-520q-75 0-127.5 52.5T300-340q0 75 52.5 127.5T480-160ZM363-572q20-11 42.5-17.5T451-598L350-800H250l113 228ZM256-208q-17-29-26.5-62.5T220-340q0-36 9.5-69.5T256-472q-42 14-69 49.5T160-340q0 47 27 82.5t69 49.5Zm448 0q42-14 69-49.5t27-82.5q0-47-27-82.5T704-472q17 29 26.5 62.5T740-340q0 36-9.5 69.5T704-208ZM480-80q-40 0-76.5-11.5T336-123q-9 2-18 2.5t-19 .5q-91 0-155-64T80-339q0-87 58-149t143-69L149-822q-10-20 1.5-39t34.5-19h166q23 0 41.5 12t29.5 32l58 116 58-116q11-20 29.5-32t41.5-12h166q23 0 34.5 19t1.5 39L680-559q85 8 142.5 70T880-340q0 92-64 156t-156 64q-9 0-18.5-.5T623-123q-31 20-67 31.5T480-80Zm0-260ZM363-572 250-800l113 228Zm117 286-49 37q-6 5-12 .5t-4-11.5l19-61-49-35q-6-5-4-11.5t10-6.5h60l19-65q2-7 10-7t10 7l19 65h60q8 0 10 6.5t-4 11.5l-49 35 19 61q2 7-4 11.5t-12-.5l-49-37Zm117-286 114-228H610l-85 170 19 38q14 4 27 8.5t26 11.5Z"/>
    </Icon>
  );
});

IconMaterialSocialLeaderboard.displayName = 'OnesyIconMaterialSocialLeaderboard';

export default IconMaterialSocialLeaderboard;
