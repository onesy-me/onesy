import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmptyDashboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmptyDashboardW100Filled'

      short_name='EmptyDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-256h196v-136H256v136Zm0-192h196v-256H256v256Zm252 192h196v-256H508v256Zm0-312h196v-136H508v136ZM172-172v-616h616v148h56v28h-56v118h56v28h-56v118h56v28h-56v148H172Z"/>
    </Icon>
  );
});

IconMaterialEmptyDashboardW100Filled.displayName = 'OnesyIconMaterialEmptyDashboardW100Filled';

export default IconMaterialEmptyDashboardW100Filled;
