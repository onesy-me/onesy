import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTeamDashboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TeamDashboardFilled'

      short_name='TeamDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-120v-330H120v330h280Zm80 0h360v-330H480v330ZM120-530h720v-310H120v310Z"/>
    </Icon>
  );
});

IconMaterialTeamDashboardFilled.displayName = 'OnesyIconMaterialTeamDashboardFilled';

export default IconMaterialTeamDashboardFilled;
