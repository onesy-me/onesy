import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFileMoveRtl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveRtl'

      short_name='DriveFileMoveRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M11.17,8l-2-2H4v12h16V8H11.17z M16,14h-4v3l-4-4l4-4v3h4V14z" opacity=".3"/><path d="M20,6h-8l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h5.17l2,2H20V18z M12,17l-4-4l4-4v3h4v2h-4V17z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveRtl.displayName = 'OnesyIconMaterialDriveFileMoveRtl';

export default IconMaterialDriveFileMoveRtl;
