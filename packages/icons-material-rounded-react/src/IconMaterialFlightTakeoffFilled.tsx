import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightTakeoffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoffFilled'

      short_name='FlightTakeoff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-120H160q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120ZM212-464l192-52-139-236q-8-14-3-30t22-21l17-5q9-3 18-1t16 8l259 233 200-54q32-9 58 12t26 56q0 22-13.5 39T830-492L223-328q-13 4-25-1t-19-17L98-484q-7-11-1.5-23t18.5-14l15-3q6-1 11 .5t10 5.5l61 54Z"/>
    </Icon>
  );
});

IconMaterialFlightTakeoffFilled.displayName = 'OnesyIconMaterialFlightTakeoffFilled';

export default IconMaterialFlightTakeoffFilled;
