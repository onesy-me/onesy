import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddModeratorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorW100'

      short_name='AddModerator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v226q-6-2-14-3.5t-14-3.5v-200l-240-89-240 89v189q0 63 19 119.5t51.5 103q32.5 46.5 76.5 80t93 49.5l3-1q3 6 7 12t9 12q-5 2-9.5 3.5T480-134Zm200 2q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM480-479Zm186 293h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorW100.displayName = 'OnesyIconMaterialAddModeratorW100';

export default IconMaterialAddModeratorW100;
