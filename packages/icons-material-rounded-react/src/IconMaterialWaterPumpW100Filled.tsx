import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterPumpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPumpW100Filled'

      short_name='WaterPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-401q23 0 38.5-15.5T534-455q0-13.87-5.5-27.43Q523-496 504-523l-12-18q-5-7-12.5-7t-12.5 7l-11.98 17.54Q436-494 431-482t-5 27.41q0 22.1 15.5 37.85Q457-401 480-401Zm-.11 149Q385-252 318.5-318.61q-66.5-66.6-66.5-161.5 0-94.89 66.61-161.39 66.6-66.5 161.5-66.5 94.89 0 161.39 66.61 66.5 66.6 66.5 161.5 0 94.89-66.61 161.39-66.6 66.5-161.5 66.5ZM814-532v-14h-87q-14-53-47.5-95T597-708h217v-14q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v190q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97ZM118-238v-190q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v14h87q14 53 47.5 95t82.5 67H146v14q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialWaterPumpW100Filled.displayName = 'OnesyIconMaterialWaterPumpW100Filled';

export default IconMaterialWaterPumpW100Filled;
