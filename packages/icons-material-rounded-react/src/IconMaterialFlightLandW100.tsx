import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightLandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandW100'

      short_name='FlightLand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M734-339 194-489q-10-3-16-11t-6-18v-128q0-5 4-8.5t9-1.5l5 1q3 1 5 3t3 4l26 81 202 57v-299q0-8 5.5-12.5T444-824l8 2q4 1 6.5 3.5t4.5 6.5l107 342 188 53q14 4 22 15t8 25q0 20-17 32t-37 6ZM186-172q-6 0-10-4t-4-10q0-6 4-10t10-4h588q6 0 10 4t4 10q0 6-4 10t-10 4H186Z"/>
    </Icon>
  );
});

IconMaterialFlightLandW100.displayName = 'OnesyIconMaterialFlightLandW100';

export default IconMaterialFlightLandW100;
