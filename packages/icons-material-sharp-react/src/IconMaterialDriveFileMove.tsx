import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFileMove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMove'

      short_name='DriveFileMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm80-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm328-160-65 65 56 56 161-161-161-161-56 56 65 65H320v80h168Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMove.displayName = 'OnesyIconMaterialDriveFileMove';

export default IconMaterialDriveFileMove;
