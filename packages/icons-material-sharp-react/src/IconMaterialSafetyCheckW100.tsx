import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckW100'

      short_name='SafetyCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-331q62 0 105-43t43-105q0-62-43-105t-105-43q-62 0-105 43t-43 105q0 62 43 105t105 43Zm66-62-80-80v-120h28v108l72 72-20 20Zm-66 259q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-315Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckW100.displayName = 'OnesyIconMaterialSafetyCheckW100';

export default IconMaterialSafetyCheckW100;
