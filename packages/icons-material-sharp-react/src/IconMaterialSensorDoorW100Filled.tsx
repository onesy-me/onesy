import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorDoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorDoorW100Filled'

      short_name='SensorDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-696h536v696H212Zm407.88-314q14.12 0 24.12-9.88 10-9.88 10-24T644.12-504q-9.88-10-24-10T596-504.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Z"/>
    </Icon>
  );
});

IconMaterialSensorDoorW100Filled.displayName = 'OnesyIconMaterialSensorDoorW100Filled';

export default IconMaterialSensorDoorW100Filled;
