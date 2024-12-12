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
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm368-28h80v-80h80v-80h-80v-80h80v-80h-80v-80h-80v80h80v80h-80v80h80v80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialFolderZipW100Filled.displayName = 'OnesyIconMaterialFolderZipW100Filled';

export default IconMaterialFolderZipW100Filled;
