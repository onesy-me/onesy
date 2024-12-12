import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderZip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZip'

      short_name='FolderZip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-480v-80h80v80h-80Zm0 80h-80v-80h80v80Zm0 80v-80h80v80h-80ZM447-640l-80-80H160v480h400v-80h80v80h160v-400H640v80h-80v-80H447ZM80-160v-640h320l80 80h400v560H80Zm80-80v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFolderZip.displayName = 'OnesyIconMaterialFolderZip';

export default IconMaterialFolderZip;
