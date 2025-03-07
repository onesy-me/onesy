import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoCameraFrontW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraFrontW100'

      short_name='PhotoCameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q8-9 19.5-14t24.5-5h144q13 0 24.5 5t19.5 14l56 61h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-416q0-14-9-23t-23-9H640l-74-80H394l-74 80H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm288-240ZM356-326h248v-2q0-32-32.5-49T480-394q-59 0-91.5 17T356-328v2Zm124-140q23 0 38.5-15.5T534-520q0-23-15.5-38.5T480-574q-23 0-38.5 15.5T426-520q0 23 15.5 38.5T480-466Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFrontW100.displayName = 'OnesyIconMaterialPhotoCameraFrontW100';

export default IconMaterialPhotoCameraFrontW100;
