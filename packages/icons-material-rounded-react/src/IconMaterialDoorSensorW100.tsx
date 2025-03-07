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
      <path d="M360-360v-400 560-160Zm-28 14h28v114q0 14 9 23t23 9h176q14 0 23-9t9-23v-496q0-14-9-23t-23-9H392q-14 0-23 9t-9 23v354h-28v-354q0-24.75 17.63-42.38Q367.25-788 392-788h176q24.75 0 42.38 17.62Q628-752.75 628-728v496q0 24.75-17.62 42.37Q592.75-172 568-172H392q-24.75 0-42.37-17.63Q332-207.25 332-232v-114Zm148-226q11 0 19.5-8.5T508-600q0-11-8.5-19.5T480-628q-11 0-19.5 8.5T452-600q0 11 8.5 19.5T480-572Zm293.96-54q-5.96 0-9.96-4.03-4-4.02-4-9.97v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM246-346q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h248q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H246Z"/>
    </Icon>
  );
});

IconMaterialDoorSensorW100.displayName = 'OnesyIconMaterialDoorSensorW100';

export default IconMaterialDoorSensorW100;
