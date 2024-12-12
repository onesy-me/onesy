import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeDownAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownAltW100Filled'

      short_name='SwipeDownAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132 356-256l20-20 90 90v-214q-69-7-114.5-56T306-574q0-72 51-123t123-51q72 0 123 51t51 123q0 69-45.5 118T494-400v214l90-90 20 20-124 124Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownAltW100Filled.displayName = 'OnesyIconMaterialSwipeDownAltW100Filled';

export default IconMaterialSwipeDownAltW100Filled;
