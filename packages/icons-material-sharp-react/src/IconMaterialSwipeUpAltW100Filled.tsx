import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeUpAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpAltW100Filled'

      short_name='SwipeUpAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-212q-72 0-123-51t-51-123q0-69 45.5-118T466-560v-214l-90 90-20-20 124-124 124 124-20 20-90-90v214q69 7 114.5 56T654-386q0 72-51 123t-123 51Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpAltW100Filled.displayName = 'OnesyIconMaterialSwipeUpAltW100Filled';

export default IconMaterialSwipeUpAltW100Filled;
