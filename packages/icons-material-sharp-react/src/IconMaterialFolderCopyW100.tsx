import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCopyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyW100'

      short_name='FolderCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-184v-480h28v452h628v28H92Zm108-108v-536h258l80 80h330v456H200Zm28-28h612v-400H527l-80-80H228v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyW100.displayName = 'OnesyIconMaterialFolderCopyW100';

export default IconMaterialFolderCopyW100;
