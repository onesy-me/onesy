import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBack'

      short_name='VideoCameraBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h640v260l160-160v440L720-420v260H80Zm80-80h480v-480H160v480Zm0 0v-480 480Zm40-80h400L462-500l-92 120-62-80-108 140Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBack.displayName = 'OnesyIconMaterialVideoCameraBack';

export default IconMaterialVideoCameraBack;
