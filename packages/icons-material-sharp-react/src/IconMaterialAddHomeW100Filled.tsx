import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeW100Filled'

      short_name='AddHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-206h28v-100h100v-28H734v-100h-28v100H606v28h100v100Zm14 34q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-508-80v-402l268-203 268 203v67q-7-.5-14-.75t-14-.25q-111.99 0-189.99 78.01Q452-431.99 452-320q0 17 2.5 34t6.5 34H212Z"/>
    </Icon>
  );
});

IconMaterialAddHomeW100Filled.displayName = 'OnesyIconMaterialAddHomeW100Filled';

export default IconMaterialAddHomeW100Filled;
