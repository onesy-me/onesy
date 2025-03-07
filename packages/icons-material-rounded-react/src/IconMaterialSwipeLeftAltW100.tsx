import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeLeftAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftAltW100'

      short_name='SwipeLeftAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M574-306q-69 0-118-45.5T400-466H186l80 80q4 4 4.5 9.5t-4.72 10.72Q261-361 256-361q-5 0-10-5l-92.65-92.65Q148-464 146-469.13q-2-5.14-2-11 0-5.87 2-10.87 2-5 7.35-10.35L246-594q4-4 9.5-4.5t10.5 4.28q5 5.22 5 10.22 0 5-5 10l-80 80h214q7-69 56-114.5T574-654q72.21 0 123.1 50.85 50.9 50.85 50.9 123T697.1-357q-50.89 51-123.1 51Zm.12-28q60.88 0 103.38-42.62 42.5-42.62 42.5-103.5T677.38-583.5Q634.76-626 573.88-626T470.5-583.38Q428-540.76 428-479.88t42.62 103.38q42.62 42.5 103.5 42.5ZM574-480Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftAltW100.displayName = 'OnesyIconMaterialSwipeLeftAltW100';

export default IconMaterialSwipeLeftAltW100;
