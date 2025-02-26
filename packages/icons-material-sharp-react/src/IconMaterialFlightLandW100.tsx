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
      <path d="M734-339 172-495v-164l24 6 28 86 202 57v-318l34 8 110 350 188 53q14 4 22 15t8 25q0 20-17 32t-37 6ZM172-172v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialFlightLandW100.displayName = 'OnesyIconMaterialFlightLandW100';

export default IconMaterialFlightLandW100;
