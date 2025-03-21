import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompassCalibration = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibration'

      short_name='CompassCalibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-141.5-58.5T280-280q0-83 58.5-141.5T480-480q83 0 141.5 58.5T680-280q0 83-58.5 141.5T480-80Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-400q-48 0-92.5 15.5T308-498q-12 11-27.5 10T254-500L111-643q-12-12-12-30t14-29q78-66 171.5-102T480-840q102 0 195.5 36T847-702q14 11 14 29t-12 30L706-500q-11 11-26.5 12T652-498q-35-31-79.5-46.5T480-560Zm-194-20q42-30 91.5-45T480-640q53 0 101.5 14.5T674-582l88-88q-62-44-133.5-67T480-760q-77 0-148.5 23T198-670l88 90Zm194-60Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibration.displayName = 'OnesyIconMaterialCompassCalibration';

export default IconMaterialCompassCalibration;
