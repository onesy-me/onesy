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
      <path d="M480-144q-6 0-11-2t-10-7l-93-93q-4-4-4.5-9.5T366-266q5-5 10-5t10 5l80 80v-214q-69-7-114.5-56T306-574q0-72 51-123t123-51q72 0 123 51t51 123q0 69-45.5 118T494-400v214l80-80q4-4 9.5-4.5T594-266q5 5 5 10t-5 10l-93 93q-5 5-10 7t-11 2Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownAltW100Filled.displayName = 'OnesyIconMaterialSwipeDownAltW100Filled';

export default IconMaterialSwipeDownAltW100Filled;
