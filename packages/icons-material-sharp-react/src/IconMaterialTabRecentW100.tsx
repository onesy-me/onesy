import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabRecentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecentW100'

      short_name='TabRecent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92Zm66-62 20-20-72-71.61V-354h-28v120l80 80ZM560-610h240v155q8 2 14.5 5t13.5 7v-305H132v536h361q-1-7-1-13.89V-240H160v-480h400v110ZM160-272v32-480 448Z"/>
    </Icon>
  );
});

IconMaterialTabRecentW100.displayName = 'OnesyIconMaterialTabRecentW100';

export default IconMaterialTabRecentW100;
