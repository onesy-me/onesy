import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightFilled'

      short_name='SwipeRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-680q30-106 142-173t258-67q94 0 181 31t159 90v-81h60v200H680v-60h116q-66-58-147-89t-169-31q-118 0-208.5 48T143-680H80ZM423-80 184-320l63-65 113 32v-367h80v320h40v-160h80v160h40v-120h80v120h40v-40h80v360H423Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightFilled.displayName = 'OnesyIconMaterialSwipeRightFilled';

export default IconMaterialSwipeRightFilled;
