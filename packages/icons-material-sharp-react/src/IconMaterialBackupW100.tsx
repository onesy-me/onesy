import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupW100'

      short_name='Backup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-212q-70 0-119-48.77Q92-309.55 92-380q0-69 49.5-118.5T254-548q10-86 74.5-143T480-748q95.27 0 161.64 66.36Q708-615.27 708-520v52h32q54 0 91 37t37 91q0 54-36 91t-90 37H526q-26 0-43-17t-17-43v-240l-90 90-20-19 124-124 124 124-20 19-90-90v240q0 12 10 22t22 10h214q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-22q-55 0-96.5 41T120-380q0 58 41 99t99 41h100v28H260Zm220-254Z"/>
    </Icon>
  );
});

IconMaterialBackupW100.displayName = 'OnesyIconMaterialBackupW100';

export default IconMaterialBackupW100;
