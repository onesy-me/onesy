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
      <path d="M466-212H260q-70 0-119-49T92-380q0-66 47-117t115-51q10-86 74.5-143T480-748q95 0 161.5 66.5T708-520v52h32q54 0 91 37t37 91q0 54-37 91t-91 37H494v-300l90 90 20-19-124-124-124 124 20 19 90-90v300Z"/>
    </Icon>
  );
});

IconMaterialBackupW100Filled.displayName = 'OnesyIconMaterialBackupW100Filled';

export default IconMaterialBackupW100Filled;
