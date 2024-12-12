import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraBackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackFilled'

      short_name='VideoCameraBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-320h400L462-500l-92 120-62-80-108 140ZM80-160v-640h640v260l160-160v440L720-420v260H80Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackFilled.displayName = 'OnesyIconMaterialVideoCameraBackFilled';

export default IconMaterialVideoCameraBackFilled;
