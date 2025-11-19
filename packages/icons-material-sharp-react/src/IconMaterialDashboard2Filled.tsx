import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDashboard2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dashboard2Filled'

      short_name='Dashboard2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160v-280h280v280H600ZM440-520v-280h440v280H440ZM80-160v-280h440v280H80Zm0-360v-280h280v280H80Z"/>
    </Icon>
  );
});

IconMaterialDashboard2Filled.displayName = 'OnesyIconMaterialDashboard2Filled';

export default IconMaterialDashboard2Filled;
