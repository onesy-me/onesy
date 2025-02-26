import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorSensorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensorFilled'

      short_name='DoorSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-160h280v-160H280v-400h400v720H280ZM160-320v-80h360v80H160Zm320-240q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm280-40v-240h80v240h-80Z"/>
    </Icon>
  );
});

IconMaterialDoorSensorFilled.displayName = 'OnesyIconMaterialDoorSensorFilled';

export default IconMaterialDoorSensorFilled;
