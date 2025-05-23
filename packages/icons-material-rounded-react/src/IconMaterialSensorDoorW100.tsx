import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorDoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorDoorW100'

      short_name='SensorDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-25 0-42.5-17.5T212-192v-576q0-25 17.5-42.5T272-828h416q25 0 42.5 17.5T748-768v576q0 25-17.5 42.5T688-132H272Zm0-28h416q14 0 23-9t9-23v-576q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v576q0 14 9 23t23 9Zm348-286q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10ZM240-800h-52v640h52v-640Z"/>
    </Icon>
  );
});

IconMaterialSensorDoorW100.displayName = 'OnesyIconMaterialSensorDoorW100';

export default IconMaterialSensorDoorW100;
