import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeUpAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpAlt'

      short_name='SwipeUpAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q-83 0-141.5-58.5T280-360q0-73 45.5-127.5T440-556v-171l-36 36q-11 11-27.5 11T348-692q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11 27.5T612-692q-12 12-28.5 12T555-692l-35-35v171q69 14 114.5 68.5T680-360q0 83-58.5 141.5T480-160Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpAlt.displayName = 'OnesyIconMaterialSwipeUpAlt';

export default IconMaterialSwipeUpAlt;
