import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTeamDashboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TeamDashboardW100Filled'

      short_name='TeamDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-172v-304H172v304h254Zm28 0h334v-304H454v304ZM172-504h616v-284H172v284Z"/>
    </Icon>
  );
});

IconMaterialTeamDashboardW100Filled.displayName = 'OnesyIconMaterialTeamDashboardW100Filled';

export default IconMaterialTeamDashboardW100Filled;
