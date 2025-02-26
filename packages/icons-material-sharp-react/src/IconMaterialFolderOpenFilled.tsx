import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenFilled'

      short_name='FolderOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v80H160v400l96-320h684L820-160H80Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenFilled.displayName = 'OnesyIconMaterialFolderOpenFilled';

export default IconMaterialFolderOpenFilled;
