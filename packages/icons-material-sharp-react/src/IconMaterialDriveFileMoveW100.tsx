import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFileMoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveW100'

      short_name='DriveFileMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Zm28-28h640v-400H448l-80-80H160v480Zm0 0v-480 480Zm390-186-80 80 20 20 114-114-114-114-20 20 80 80H356v28h194Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveW100.displayName = 'OnesyIconMaterialDriveFileMoveW100';

export default IconMaterialDriveFileMoveW100;
