import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFileMoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveW100Filled'

      short_name='DriveFileMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Zm418-214-80 80 20 20 114-114-114-114-20 20 80 80H356v28h194Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveW100Filled.displayName = 'OnesyIconMaterialDriveFileMoveW100Filled';

export default IconMaterialDriveFileMoveW100Filled;
