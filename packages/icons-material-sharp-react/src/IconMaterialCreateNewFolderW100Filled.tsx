import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreateNewFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderW100Filled'

      short_name='CreateNewFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Zm454-134h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderW100Filled.displayName = 'OnesyIconMaterialCreateNewFolderW100Filled';

export default IconMaterialCreateNewFolderW100Filled;
