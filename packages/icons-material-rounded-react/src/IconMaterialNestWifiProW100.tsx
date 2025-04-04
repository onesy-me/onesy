import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWifiProW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiProW100'

      short_name='NestWifiPro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.88-306q14.12 0 24.12-9.88 10-9.88 10-24T504.12-364q-9.88-10-24-10T456-364.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM360-132q-60.34 0-97.17-37.5T206-260.55Q186-315 179-374.5T172-479q0-86 13.35-150.82Q198.69-694.63 234-739q35.01-44.95 93.93-66.97Q386.85-828 479.92-828q93.08 0 152.06 22.03Q690.96-783.95 726-739q35.31 44.37 48.65 109.18Q788-565 788-479q0 45-7 104.5t-27 113.95Q734-207 697.17-169.5T600-132H360Zm-1-28h240q51 0 82.5-36t48.5-87q17-51 22.5-104.76Q758-441.52 758-479q0-80-11-140t-42-100q-32-41-86-61t-140-20q-86 0-140 20t-86 61q-31 40-42 100t-11 140q0 37.48 5.5 91.24T228-283q17 51 48.5 87t82.5 36Zm120-320Z"/>
    </Icon>
  );
});

IconMaterialNestWifiProW100.displayName = 'OnesyIconMaterialNestWifiProW100';

export default IconMaterialNestWifiProW100;
