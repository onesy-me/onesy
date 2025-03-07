import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWifiProW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiProW100Filled'

      short_name='NestWifiPro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.88-306q14.12 0 24.12-9.88 10-9.88 10-24T504.12-364q-9.88-10-24-10T456-364.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM360-132q-60.34 0-97.17-37.5T206-260.55Q186-315 179-374.5T172-479q0-86 13.35-150.82Q198.69-694.63 234-739q35.01-44.95 93.93-66.97Q386.85-828 479.92-828q93.08 0 152.06 22.03Q690.96-783.95 726-739q35.31 44.37 48.65 109.18Q788-565 788-479q0 45-7 104.5t-27 113.95Q734-207 697.17-169.5T600-132H360Z"/>
    </Icon>
  );
});

IconMaterialNestWifiProW100Filled.displayName = 'OnesyIconMaterialNestWifiProW100Filled';

export default IconMaterialNestWifiProW100Filled;
