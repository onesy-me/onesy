import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeRightAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightAltW100Filled'

      short_name='SwipeRightAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-306q-72 0-123-51t-51-123q0-72 51-123t123-51q69 0 118 45.5T560-494h214l-90-90 20-20 124 124-124 124-20-20 90-90H560q-7 69-56 114.5T386-306Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightAltW100Filled.displayName = 'OnesyIconMaterialSwipeRightAltW100Filled';

export default IconMaterialSwipeRightAltW100Filled;
