import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderSharedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharedW100Filled'

      short_name='FolderShared'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Zm344-104h248v-2q0-32-32.5-49T600-384q-59 0-91.5 17T476-318v2Zm124-140q23 0 38.5-15.5T654-510q0-23-15.5-38.5T600-564q-23 0-38.5 15.5T546-510q0 23 15.5 38.5T600-456Z"/>
    </Icon>
  );
});

IconMaterialFolderSharedW100Filled.displayName = 'OnesyIconMaterialFolderSharedW100Filled';

export default IconMaterialFolderSharedW100Filled;
