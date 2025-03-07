import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncSavedLocallyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSavedLocallyW100Filled'

      short_name='SyncSavedLocally'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m437-450-75-75q-4-4-9.5-4.5T342-525q-5 5-5 10t5 10l74 73q9 9 21 9t21-9l159-158q5-4 5-9.5t-5-10.5q-5-5-10-5t-10 5L437-450ZM80-200v-28h786q6 0 10 4t4 10q0 6-4 10t-10 4H80Zm112-68q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h576q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyW100Filled.displayName = 'OnesyIconMaterialSyncSavedLocallyW100Filled';

export default IconMaterialSyncSavedLocallyW100Filled;
