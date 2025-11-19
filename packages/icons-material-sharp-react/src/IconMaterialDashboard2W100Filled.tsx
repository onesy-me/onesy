import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDashboard2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dashboard2W100Filled'

      short_name='Dashboard2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M610-212v-218h218v218H610ZM450-530v-218h378v218H450ZM132-212v-218h378v218H132Zm0-318v-218h218v218H132Z"/>
    </Icon>
  );
});

IconMaterialDashboard2W100Filled.displayName = 'OnesyIconMaterialDashboard2W100Filled';

export default IconMaterialDashboard2W100Filled;
