import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightsAndHotelsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightsAndHotelsW100Filled'

      short_name='FlightsAndHotels'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240q-23 0-38.5-15.5T306-294q0-23 15.5-38.5T360-348q23 0 38.5 15.5T414-294q0 23-15.5 38.5T360-240ZM225.96-66Q220-66 216-70.03q-4-4.02-4-9.97v-294q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v174h240v-118.4q0-12.58 8.63-21.09Q497.25-348 510-348h178q26 0 43 17t17 43v208q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-92H240v92q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM512-654 406-548l9 58.92q1 5.08 0 9.08t-5 8l-4 4q-8 8-17.5 6T374-473l-36-64-69-37q-8-4-9-12.5t5-14.5l8-8q2-2 14-5l60.72 8L455-713 267-815q-11-5-12-17t7-20l7-7q5-5 10.5-6.5t11.5.5l251 65 108-108q12-12 29-12t29 12q12 12 12 29t-12 29L600-742l64 250q2 7 .5 13t-6.5 11l-4 4q-9 9-22 7t-19-13L512-654Z"/>
    </Icon>
  );
});

IconMaterialFlightsAndHotelsW100Filled.displayName = 'OnesyIconMaterialFlightsAndHotelsW100Filled';

export default IconMaterialFlightsAndHotelsW100Filled;
