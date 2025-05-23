import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderDelete = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDelete'

      short_name='FolderDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm80-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm360-40h200v-220h40v-60H660v-40h-80v40H480v60h40v220Zm60-60v-160h80v160h-80Z"/>
    </Icon>
  );
});

IconMaterialFolderDelete.displayName = 'OnesyIconMaterialFolderDelete';

export default IconMaterialFolderDelete;
