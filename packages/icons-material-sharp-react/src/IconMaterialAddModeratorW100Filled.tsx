import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddModeratorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorW100Filled'

      short_name='AddModerator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-132q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-200-2q-115-36-191.5-142T212-516v-208l268-100 268 100v226q-14-5-32.5-7.5T680-508q-95 0-161.5 66.5T452-280q0 35 11 71t36 68q-5 2-9.5 3.5T480-134Zm186-52h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorW100Filled.displayName = 'OnesyIconMaterialAddModeratorW100Filled';

export default IconMaterialAddModeratorW100Filled;
