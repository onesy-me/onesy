import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraBackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackW100'

      short_name='VideoCameraBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M157-212v-536h536v248l110-110v260L693-460v248H157Zm28-28h480v-480H185v480Zm0 0v-480 480Zm74-94h332L489-470 389-346l-64-74-66 86Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackW100.displayName = 'OnesyIconMaterialVideoCameraBackW100';

export default IconMaterialVideoCameraBackW100;
