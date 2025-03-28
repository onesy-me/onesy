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
      <path d="M480-164q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm0-28q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM282-512 156-640q69-56 152-86t172-30q89 0 172 30t152 86L678-512q-42-33-93-50.5T480-580q-54 0-105 17.5T282-512Zm4-36q42-30 91.5-45T480-608q53 0 101.5 14.5T674-550l88-88q-62-44-133.5-67T480-728q-77 0-148.5 23T198-638l88 90Zm194-60Zm0 296Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationW100.displayName = 'OnesyIconMaterialCompassCalibrationW100';

export default IconMaterialCompassCalibrationW100;
