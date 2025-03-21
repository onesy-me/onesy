import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHangoutVideo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideo'

      short_name='HangoutVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h320v-128l160 128v-320L560-512v-128H240v320ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideo.displayName = 'OnesyIconMaterialHangoutVideo';

export default IconMaterialHangoutVideo;
