import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompassCalibrationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibrationFilled'

      short_name='CompassCalibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-141.5-58.5T280-280q0-83 58.5-141.5T480-480q83 0 141.5 58.5T680-280q0 83-58.5 141.5T480-80ZM280-474 80-674q80-80 183.5-123T480-840q113 0 216.5 43T880-674L680-474q-41-41-92-63.5T480-560q-57 0-108 22.5T280-474Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationFilled.displayName = 'OnesyIconMaterialCompassCalibrationFilled';

export default IconMaterialCompassCalibrationFilled;
