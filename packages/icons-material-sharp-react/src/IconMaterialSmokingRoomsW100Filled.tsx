import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmokingRoomsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokingRoomsW100Filled'

      short_name='SmokingRooms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M140-244v-56h544v56H140Zm584 0v-56h28v56h-28Zm68 0v-56h28v56h-28Zm-68-116v-52q0-35-23-58.5T646-494h-62q-42 0-72-30.85T482-600q0-40.96 30-69.48Q542-698 584-698v28q-30 0-52 19.81t-22 50Q510-570 532-546q22 24 52 24h62q44 0 75 32.5t31 77.5v52h-28Zm68 0v-90q0-66-46-106t-114-40v-28q30 0 51-21t21-51q0-32-21-54t-51-22v-28q42 0 71 31t29 73q0 29-12 49t-30 30.87Q741-602 780.5-560T820-450v90h-28Z"/>
    </Icon>
  );
});

IconMaterialSmokingRoomsW100Filled.displayName = 'OnesyIconMaterialSmokingRoomsW100Filled';

export default IconMaterialSmokingRoomsW100Filled;
