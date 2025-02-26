import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightTakeoffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoffW100'

      short_name='FlightTakeoff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M774-172H186q-6 0-10-4t-4-10q0-6 4-10t10-4h588q6 0 10 4t4 10q0 6-4 10t-10 4ZM230-415l207-56-153-258q-4-6-1.5-12.5t9.5-8.5l7-3q4-2 7.5-.5t6.5 3.5l268 239 195-51q20-5 36 7.5t16 32.5q0 14-7.5 24T800-484L238-332q-10 3-19.5-1T204-346l-65-113q-3-5-.5-9.5t7.5-6.5l6-1q2-1 5-.5t5 2.5l68 59Z"/>
    </Icon>
  );
});

IconMaterialFlightTakeoffW100.displayName = 'OnesyIconMaterialFlightTakeoffW100';

export default IconMaterialFlightTakeoffW100;
