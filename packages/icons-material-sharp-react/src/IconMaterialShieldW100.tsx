import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldW100'

      short_name='Shield'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-315Z"/>
    </Icon>
  );
});

IconMaterialShieldW100.displayName = 'OnesyIconMaterialShieldW100';

export default IconMaterialShieldW100;
