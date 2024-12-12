import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderSpecialFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialFilled'

      short_name='FolderSpecial'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m504-292 92-70 92 70-34-114 92-74H632l-36-112-36 112H446l92 74-34 114ZM80-160v-640h320l80 80h400v560H80Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialFilled.displayName = 'OnesyIconMaterialFolderSpecialFilled';

export default IconMaterialFolderSpecialFilled;
