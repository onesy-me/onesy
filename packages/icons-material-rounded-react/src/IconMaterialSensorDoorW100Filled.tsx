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
      <path d="M272-132q-24.75 0-42.37-17.63Q212-167.25 212-192v-576q0-24.75 17.63-42.38Q247.25-828 272-828h416q24.75 0 42.38 17.62Q748-792.75 748-768v576q0 24.75-17.62 42.37Q712.75-132 688-132H272Zm347.88-314q14.12 0 24.12-9.88 10-9.88 10-24T644.12-504q-9.88-10-24-10T596-504.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Z"/>
    </Icon>
  );
});

IconMaterialSensorDoorW100Filled.displayName = 'OnesyIconMaterialSensorDoorW100Filled';

export default IconMaterialSensorDoorW100Filled;
