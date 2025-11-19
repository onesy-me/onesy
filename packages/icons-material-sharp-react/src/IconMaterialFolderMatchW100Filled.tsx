import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderMatchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderMatchW100Filled'

      short_name='FolderMatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-237q-61-29-101-82.5T215-440h28q9 55 41.5 100t81.5 72v31Zm100 105v-288h132l36 56h194v232H466ZM132-540v-288h132l36 56h194v232H132Zm588 60q0-67-33.5-123.5T594-691v-30q72 31 113 97t41 144h-28Z"/>
    </Icon>
  );
});

IconMaterialFolderMatchW100Filled.displayName = 'OnesyIconMaterialFolderMatchW100Filled';

export default IconMaterialFolderMatchW100Filled;
