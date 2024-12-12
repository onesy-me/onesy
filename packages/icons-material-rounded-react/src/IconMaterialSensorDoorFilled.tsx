import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorDoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorDoorFilled'

      short_name='SensorDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm380-340q25 0 42.5-17.5T680-480q0-25-17.5-42.5T620-540q-25 0-42.5 17.5T560-480q0 25 17.5 42.5T620-420Z"/>
    </Icon>
  );
});

IconMaterialSensorDoorFilled.displayName = 'OnesyIconMaterialSensorDoorFilled';

export default IconMaterialSensorDoorFilled;
