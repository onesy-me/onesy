import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupW100Filled'

      short_name='Backup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-212q-70 0-119-49T92-380q0-66 47-117t115-51q10-86 74.5-143T480-748q95 0 161.5 66.5T708-520v52h32q54 0 91 37t37 91q0 54-37 91t-91 37H494v-300l81 81q4 4 9.5 4t9.5-4q5-4 4.5-10t-4.5-10l-93-93q-9-9-21-9t-21 9l-93 93q-4 4-4.5 10t4.5 10q4 4 10 3.5t10-4.5l80-80v300H260Z"/>
    </Icon>
  );
});

IconMaterialBackupW100Filled.displayName = 'OnesyIconMaterialBackupW100Filled';

export default IconMaterialBackupW100Filled;
