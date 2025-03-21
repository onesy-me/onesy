import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineStopsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsW100Filled'

      short_name='AirlineStops'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M465-280q-1-146-91.5-255T146-652q-6 0-10-4.14t-4-10q0-5.86 5-9.86 5-4 12-3 121 8 211.5 90T480-386q29-99 98.5-172.5T739-680H589q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h169q12.75 0 21.38 8.62Q788-690.75 788-678v169q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-150q-113 57-190 155.5T493-280h59q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H405q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h60Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsW100Filled.displayName = 'OnesyIconMaterialAirlineStopsW100Filled';

export default IconMaterialAirlineStopsW100Filled;
