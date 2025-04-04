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
      <path d="M480-212q-72 0-123-51t-51-123q0-69 45.5-118T466-560v-214l-80 80q-4 4-9.5 4.5T366-694q-5-5-5-10t5-10l93-93q5-5 10-7t11-2q6 0 11 2t10 7l93 93q4 4 4.5 9.5T594-694q-5 5-10 5t-10-5l-80-80v214q69 7 114.5 56T654-386q0 72-51 123t-123 51Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpAltW100Filled.displayName = 'OnesyIconMaterialSwipeUpAltW100Filled';

export default IconMaterialSwipeUpAltW100Filled;
