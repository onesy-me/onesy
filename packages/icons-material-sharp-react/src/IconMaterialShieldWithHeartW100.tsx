import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldWithHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeartW100'

      short_name='ShieldWithHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-356q78-71 99.5-98.5t21.5-55.32q0-27.08-19.8-46.63Q561.41-576 534-576q-17 0-31.15 6.37Q488.71-563.25 480-552q-9-11.25-23.25-17.63Q442.5-576 426-576q-27 0-47 19.5t-20 46.64q0 14.32 3.86 26.38 3.87 12.06 17 28.27Q393-439 416.63-415.61 440.25-392.22 480-356Zm0 222q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-315Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHeartW100.displayName = 'OnesyIconMaterialShieldWithHeartW100';

export default IconMaterialShieldWithHeartW100;
