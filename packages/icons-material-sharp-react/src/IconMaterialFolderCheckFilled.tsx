import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCheckFilled'

      short_name='FolderCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m434-297 226-227-56-56-170 170-85-85-57 57 142 141ZM80-160v-640h320l80 80h400v560H80Z"/>
    </Icon>
  );
});

IconMaterialFolderCheckFilled.displayName = 'OnesyIconMaterialFolderCheckFilled';

export default IconMaterialFolderCheckFilled;
