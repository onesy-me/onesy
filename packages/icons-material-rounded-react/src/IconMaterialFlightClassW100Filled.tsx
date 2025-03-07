import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightClassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassW100Filled'

      short_name='FlightClass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M564-492q-22 0-37-15.5T512-546v-148q0-23 15-38.5t37-15.5h57q21 0 34 15.5t13 38.5v148q0 23-13 38.5T621-492h-57ZM380-292q-12 0-21.5-7T345-317l-91-312q-2-4-2-8v-97q0-6 4-10t10-4q6 0 10 4t4 10v94l94 320h280q6 0 10 4t4 10q0 6-4 10t-10 4H380Zm-25 120q-6 0-10-4t-4-10q0-6 4-10t10-4h298q6 0 10 4t4 10q0 6-4 10t-10 4H355Z"/>
    </Icon>
  );
});

IconMaterialFlightClassW100Filled.displayName = 'OnesyIconMaterialFlightClassW100Filled';

export default IconMaterialFlightClassW100Filled;
