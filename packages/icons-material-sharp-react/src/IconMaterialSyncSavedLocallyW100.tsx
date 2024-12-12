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
      <path d="m437-411 190-189-20-20-170 170-85-85-20 20 105 104ZM80-200v-28h800v28H80Zm52-68v-496h696v496H132Zm28-28h640v-440H160v440Zm0 0v-440 440Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyW100.displayName = 'OnesyIconMaterialSyncSavedLocallyW100';

export default IconMaterialSyncSavedLocallyW100;
