import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletCameraW100Filled'

      short_name='TabletCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M746-212v-508H214v508h-62q-24.75 0-42.37-17.63Q92-247.25 92-272v-416q0-24.75 17.63-42.38Q127.25-748 152-748h656q24.75 0 42.38 17.62Q868-712.75 868-688v416q0 24.75-17.62 42.37Q832.75-212 808-212h-62Zm-362.81 80q-20.19 0-34.69-14.29Q334-160.58 334-181v-128.86q0-20.14 14.29-34.64T383-359h32.5l32.5-33h64.43l32.22 33h32.21q20.14 0 34.64 14.29T626-310v128.86q0 20.14-14.29 34.64T577-132H383.19ZM480-189q23 0 40-17t17-40.14q0-23.14-17-39.5T480-302q-23 0-40 16.36t-17 39.5Q423-223 440-206t40 17Z"/>
    </Icon>
  );
});

IconMaterialTabletCameraW100Filled.displayName = 'OnesyIconMaterialTabletCameraW100Filled';

export default IconMaterialTabletCameraW100Filled;
