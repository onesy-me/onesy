import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorSensorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensorW100'

      short_name='DoorSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-360v-400 560-160Zm-28 14h28v146h240v-560H360v386h-28v-414h296v616H332v-174Zm148-226q11 0 19.5-8.5T508-600q0-11-8.5-19.5T480-628q-11 0-19.5 8.5T452-600q0 11 8.5 19.5T480-572Zm280-242h28v188h-28v-188ZM508-346H232v-28h276v28Z"/>
    </Icon>
  );
});

IconMaterialDoorSensorW100.displayName = 'OnesyIconMaterialDoorSensorW100';

export default IconMaterialDoorSensorW100;
