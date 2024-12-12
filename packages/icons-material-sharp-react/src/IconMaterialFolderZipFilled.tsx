import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderZipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipFilled'

      short_name='FolderZip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm480-80h80v-80h80v-80h-80v-80h80v-80h-80v-80h-80v80h80v80h-80v80h80v80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialFolderZipFilled.displayName = 'OnesyIconMaterialFolderZipFilled';

export default IconMaterialFolderZipFilled;
