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
      <path d="M754-324 149-492q-13-4-21-14t-8-24v-155q0-13 10.5-20.5T153-709l15 5q6 2 10 6t6 10l24 72 192 54v-273q0-17 13.5-28t30.5-6l17 4q9 2 15.5 8.5T486-841l104 331 200 56q23 6 36.5 24.5T840-388q0 33-27 53t-59 11ZM160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Z"/>
    </Icon>
  );
});

IconMaterialFlightLandFilled.displayName = 'OnesyIconMaterialFlightLandFilled';

export default IconMaterialFlightLandFilled;
