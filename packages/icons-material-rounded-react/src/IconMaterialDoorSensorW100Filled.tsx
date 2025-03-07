import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorSensorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensorW100Filled'

      short_name='DoorSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M392-172q-24.75 0-42.37-17.63Q332-207.25 332-232v-86h162q17.33 0 29.66-12.27Q536-342.54 536-359.77t-12.34-29.73Q511.33-402 494-402H332v-326q0-24.75 17.63-42.38Q367.25-788 392-788h176q24.75 0 42.38 17.62Q628-752.75 628-728v496q0 24.75-17.62 42.37Q592.75-172 568-172H392ZM246-346q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h248q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H246Zm234-226q11 0 19.5-8.5T508-600q0-11-8.5-19.5T480-628q-11 0-19.5 8.5T452-600q0 11 8.5 19.5T480-572Zm293.96-54q-5.96 0-9.96-4.03-4-4.02-4-9.97v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160q0 5.95-4.04 9.97-4.03 4.03-10 4.03Z"/>
    </Icon>
  );
});

IconMaterialDoorSensorW100Filled.displayName = 'OnesyIconMaterialDoorSensorW100Filled';

export default IconMaterialDoorSensorW100Filled;
