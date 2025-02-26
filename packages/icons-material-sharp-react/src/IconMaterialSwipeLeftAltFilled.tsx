import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeLeftAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftAltFilled'

      short_name='SwipeLeftAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-280q-73 0-127.5-45.5T404-440H233l63 64-56 56L80-480l160-160 57 56-64 64h171q14-69 68.5-114.5T600-680q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftAltFilled.displayName = 'OnesyIconMaterialSwipeLeftAltFilled';

export default IconMaterialSwipeLeftAltFilled;
