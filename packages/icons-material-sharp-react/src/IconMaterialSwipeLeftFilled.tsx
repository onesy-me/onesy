import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftFilled'

      short_name='SwipeLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-680v-200h60v81q72-59 159-90t181-31q146 0 258 67t142 173h-63q-38-84-128.5-132T480-860q-88 0-169 31t-147 89h116v60H80ZM423-80 184-320l63-65 113 32v-367h80v320h40v-160h80v160h40v-120h80v120h40v-40h80v360H423Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftFilled.displayName = 'OnesyIconMaterialSwipeLeftFilled';

export default IconMaterialSwipeLeftFilled;
