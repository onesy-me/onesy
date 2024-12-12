import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyW100Filled'

      short_name='FolderCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-184v-480h28v452h628v28H92Zm108-108v-536h258l80 80h330v456H200Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyW100Filled.displayName = 'OnesyIconMaterialFolderCopyW100Filled';

export default IconMaterialFolderCopyW100Filled;
