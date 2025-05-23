import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVapingRoomsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VapingRoomsW100'

      short_name='VapingRooms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-220q-32-8-60-11.5t-60-3.5h-32v-50h32q32 0 60-3.5t60-11.5v80Zm40 0v-80h468v80H352Zm68-20q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm304-120v-52q0-35-23-58.5T646-494h-62q-42 0-72-30.85T482-600q0-40.96 30-69.48Q542-698 584-698v28q-30 0-52 19.81t-22 50Q510-570 532-546q22 24 52 24h62q44 0 75 32.5t31 77.5v52h-28Zm68 0v-90q0-66-46-106t-114-40v-28q30 0 51-21t21-51q0-32-21-54t-51-22v-28q42 0 71 31t29 73q0 29-12 49t-30 30.87Q741-602 780.5-560T820-450v90h-28Z"/>
    </Icon>
  );
});

IconMaterialVapingRoomsW100.displayName = 'OnesyIconMaterialVapingRoomsW100';

export default IconMaterialVapingRoomsW100;
