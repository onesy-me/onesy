import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTeamDashboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TeamDashboardW100'

      short_name='TeamDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm194-28v-266H200v234q0 14 9 23t23 9h194Zm28 0h274q14 0 23-9t9-23v-234H454v266ZM200-494h560v-234q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v234Z"/>
    </Icon>
  );
});

IconMaterialTeamDashboardW100.displayName = 'OnesyIconMaterialTeamDashboardW100';

export default IconMaterialTeamDashboardW100;
