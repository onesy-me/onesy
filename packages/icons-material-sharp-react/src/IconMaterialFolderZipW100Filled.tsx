import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderZipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipW100Filled'

      short_name='FolderZip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Zm428-28h80v-80h80v-80h-80v-80h80v-80h-80v-80h-80v80h80v80h-80v80h80v80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialFolderZipW100Filled.displayName = 'OnesyIconMaterialFolderZipW100Filled';

export default IconMaterialFolderZipW100Filled;
