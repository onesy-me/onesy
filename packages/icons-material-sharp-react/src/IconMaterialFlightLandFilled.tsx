import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightLandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandFilled'

      short_name='FlightLand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M754-324 120-500v-220l60 20 28 84 192 54v-318l80 20 110 350 200 56q23 6 36.5 24.5T840-388q0 33-27 53t-59 11ZM120-120v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialFlightLandFilled.displayName = 'OnesyIconMaterialFlightLandFilled';

export default IconMaterialFlightLandFilled;
