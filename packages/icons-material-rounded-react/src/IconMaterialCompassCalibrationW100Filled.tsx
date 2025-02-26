import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompassCalibrationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibrationW100Filled'

      short_name='CompassCalibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-164q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm0-416q-48 0-93 13.5T303-526q-9 6-20 5t-19-9l-83-85q-10-10-8.5-23.5T185-660q66-46 140.5-71T480-756q80 0 154.5 25T775-660q11 8 12.5 21.5T779-615l-83 85q-8 8-19 9t-20-5q-39-27-84-40.5T480-580Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationW100Filled.displayName = 'OnesyIconMaterialCompassCalibrationW100Filled';

export default IconMaterialCompassCalibrationW100Filled;
