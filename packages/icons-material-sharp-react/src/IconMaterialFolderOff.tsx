import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOff'

      short_name='FolderOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m880-193-80-80v-367H434l-80-80-80-80h114l80 80h412v527ZM819-28 687-160H80v-640h80l80 80h-80v480h447L28-820l56-56L876-84l-57 56ZM368-480Zm209-17Z"/>
    </Icon>
  );
});

IconMaterialFolderOff.displayName = 'OnesyIconMaterialFolderOff';

export default IconMaterialFolderOff;
