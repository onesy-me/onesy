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
      <path d="M241-320h318q13 0 18.5-11t-2.5-21l-97-127q-3-4-7-6t-9-2q-5 0-9 2t-7 6l-60 78q-3 4-7 6t-9 2q-5 0-9-2t-7-6l-30-39q-3-4-7-5.5t-9-1.5q-5 0-9 1.5t-7 5.5l-67 88q-8 10-2.5 21t18.5 11Zm-81 160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBack.displayName = 'OnesyIconMaterialVideoCameraBack';

export default IconMaterialVideoCameraBack;
