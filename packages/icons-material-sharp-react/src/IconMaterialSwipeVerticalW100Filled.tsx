import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeVerticalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeVerticalW100Filled'

      short_name='SwipeVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-27h96q-59-68-95.5-149T96-479q0-91 36.5-171.5T228-800h-96v-28h153v154h-27v-118q-59 67-97 145.5T123-479q0 88 38 166t97 144v-116h27v153H132Zm481-35L328-299l18-35 149-17-120-327 27-10 105 290 78-28-60-164 27-10 60 164 78-29-45-125 26-10 46 125 78-28-19-50 26-10 106 289-295 107Z"/>
    </Icon>
  );
});

IconMaterialSwipeVerticalW100Filled.displayName = 'OnesyIconMaterialSwipeVerticalW100Filled';

export default IconMaterialSwipeVerticalW100Filled;
