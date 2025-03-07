import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncSavedLocallyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSavedLocallyW100'

      short_name='SyncSavedLocally'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m437-450-75-75q-2-2-4.5-3t-5-1q-2.5 0-5.5 1t-5 3q-5 5-5 10t5 10l74 73q9 9 21 9t21-9l165-158q0-5-1-10.5t-5-9.5q-5-5-10-5t-10 5L437-450ZM80-200v-28h786q6 0 10 4t4 10q0 6-4 10t-10 4H80Zm112-68q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h576q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-376q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v376q0 12 10 22t22 10Zm-32 0v-440 440Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyW100.displayName = 'OnesyIconMaterialSyncSavedLocallyW100';

export default IconMaterialSyncSavedLocallyW100;
