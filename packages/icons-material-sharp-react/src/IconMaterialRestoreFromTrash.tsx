import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestoreFromTrash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrash'

      short_name='RestoreFromTrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-320h80v-166l64 62 56-56-160-160-160 160 56 56 64-62v166ZM200-120v-600h-40v-80h200v-40h240v40h200v80h-40v600H200Zm80-80h400v-520H280v520Zm0-520v520-520Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrash.displayName = 'OnesyIconMaterialRestoreFromTrash';

export default IconMaterialRestoreFromTrash;
