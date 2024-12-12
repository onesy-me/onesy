import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoCameraFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraFrontW100Filled'

      short_name='PhotoCameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l74-80h196l74 80h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm164-154h248v-2q0-32-32.5-49T480-394q-59 0-91.5 17T356-328v2Zm124-140q23 0 38.5-15.5T534-520q0-23-15.5-38.5T480-574q-23 0-38.5 15.5T426-520q0 23 15.5 38.5T480-466Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFrontW100Filled.displayName = 'OnesyIconMaterialPhotoCameraFrontW100Filled';

export default IconMaterialPhotoCameraFrontW100Filled;
