import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompassCalibrationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibrationW100'

      short_name='CompassCalibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-164q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm0-28q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-388q-48.35 0-93.18 13.5Q342-553 303-526q-8.65 6-19.83 5-11.17-1-19.17-9l-83-85q-10-10-8.5-23.5T185-660q66-46 140.5-71T480-756q80 0 154.5 25T775-660q11 8 12.5 21.5T779-615l-83 85q-7.86 8.46-18.93 9.23Q666-520 657-526q-39-27-83.82-40.5Q528.35-580 480-580Zm-194 32q42-30 91.5-45T480-608q53 0 101.5 14.5T674-550l88-88q-62-44-133.5-67T480-728q-77 0-148.5 23T198-638l88 90Zm194-60Zm0 296Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationW100.displayName = 'OnesyIconMaterialCompassCalibrationW100';

export default IconMaterialCompassCalibrationW100;
