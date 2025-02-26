import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenW100Filled'

      short_name='FolderOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-212q-23 0-38.5-15.5T132-266v-422q0-23 18.5-41.5T192-748h162q12 0 23.5 5t19.5 13l62 62h346q6 0 10 4t4 10q0 6-4 10t-10 4H293q-54 0-93.5 35T160-517v245q0 11 5.5 18t14.5 12l76-255q6-19 22-31t36-12h512q30 0 48.5 24t9.5 53l-64 213q-5 17-19.5 27.5T768-212H186Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenW100Filled.displayName = 'OnesyIconMaterialFolderOpenW100Filled';

export default IconMaterialFolderOpenW100Filled;
