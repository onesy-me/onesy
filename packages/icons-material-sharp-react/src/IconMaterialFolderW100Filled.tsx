import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderW100Filled'

      short_name='Folder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Z"/>
    </Icon>
  );
});

IconMaterialFolderW100Filled.displayName = 'OnesyIconMaterialFolderW100Filled';

export default IconMaterialFolderW100Filled;
