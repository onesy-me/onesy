import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRouterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouterW100Filled'

      short_name='Router'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-216h454v-160h28v160h134v216H172Zm380-450-20-20q26-24 52-35t56-11q30 0 56 11t52 35l-20 20q-18-18-39.5-28T640-660q-27 0-48.5 10T552-622ZM452-722l-20-20q41-41 93.5-63.5T640-828q62 0 114.5 22.5T848-742l-20 20q-33-33-80.5-55.5T640-800q-60 0-107.5 22.5T452-722ZM252-252h56v-56h-56v56Zm140 0h56v-56h-56v56Zm140 0h56v-56h-56v56Z"/>
    </Icon>
  );
});

IconMaterialRouterW100Filled.displayName = 'OnesyIconMaterialRouterW100Filled';

export default IconMaterialRouterW100Filled;
