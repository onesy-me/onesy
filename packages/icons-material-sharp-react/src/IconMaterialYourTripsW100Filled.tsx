import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYourTripsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YourTripsW100Filled'

      short_name='YourTrips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-266h268v-28H346v28Zm-94 134v-348q0-75 43-132.5T404-694v-14q0-31.67 22.24-53.83 22.23-22.17 54-22.17Q512-784 534-761.83q22 22.16 22 53.83v14q66 24 109 81.5T708-480v348H252Zm180-570q12-3 24-4.5t24-1.5q12 0 24 1.5t24 4.5v-6q0-20.4-13.8-34.2Q500.4-756 480-756q-20.4 0-34.2 13.8Q432-728.4 432-708v6Zm-11.25 298 59.13-44.72L539-404l-22-73 59-42h-72.8L480-596l-23.2 77H384l59.12 42.33L420.75-404Z"/>
    </Icon>
  );
});

IconMaterialYourTripsW100Filled.displayName = 'OnesyIconMaterialYourTripsW100Filled';

export default IconMaterialYourTripsW100Filled;
