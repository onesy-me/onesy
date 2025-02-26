import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyFilled'

      short_name='FolderCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-600h80v520h680v80H40Zm160-160v-600h280l80 80h360v520H200Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyFilled.displayName = 'OnesyIconMaterialFolderCopyFilled';

export default IconMaterialFolderCopyFilled;
