import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncSavedLocallyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSavedLocallyOffFilled'

      short_name='SyncSavedLocallyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m820-28-92-92H40v-80h607l-40-40H80v-526l-52-54 56-56L876-84l-56 56Zm60-218h-52L557-517l107-107-57-57-107 107-266-266h646v594Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyOffFilled.displayName = 'OnesyIconMaterialSyncSavedLocallyOffFilled';

export default IconMaterialSyncSavedLocallyOffFilled;
