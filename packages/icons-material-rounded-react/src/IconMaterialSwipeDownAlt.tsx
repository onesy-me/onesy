import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeDownAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownAlt'

      short_name='SwipeDownAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-97q-8 0-15-2.5t-13-8.5L348-212q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l35 35v-171q-69-14-114.5-68.5T280-600q0-83 58.5-141.5T480-800q83 0 141.5 58.5T680-600q0 73-45.5 127.5T520-404v171l36-36q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508-108q-6 6-13 8.5T480-97Zm0-383q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownAlt.displayName = 'OnesyIconMaterialSwipeDownAlt';

export default IconMaterialSwipeDownAlt;
