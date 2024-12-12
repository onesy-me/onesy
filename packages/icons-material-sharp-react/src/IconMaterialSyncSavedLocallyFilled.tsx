import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncSavedLocallyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSavedLocallyFilled'

      short_name='SyncSavedLocally'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m437-398 227-226-57-57-170 170-85-85-56 56 141 142ZM40-120v-80h880v80H40Zm40-120v-600h800v600H80Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyFilled.displayName = 'OnesyIconMaterialSyncSavedLocallyFilled';

export default IconMaterialSyncSavedLocallyFilled;
