import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRight'

      short_name='SwipeRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M423-80 184-320l63-65 113 32v-367h80v473l-97-27 114 114h263v-280h80v360H423Zm57-280v-200h80v200h-80Zm120 0v-160h80v160h-80ZM80-680q30-106 142-173t258-67q94 0 181 31t159 90v-81h60v200H680v-60h116q-66-58-147-89t-169-31q-118 0-208.5 48T143-680H80Zm501 400Z"/>
    </Icon>
  );
});

IconMaterialSwipeRight.displayName = 'OnesyIconMaterialSwipeRight';

export default IconMaterialSwipeRight;
