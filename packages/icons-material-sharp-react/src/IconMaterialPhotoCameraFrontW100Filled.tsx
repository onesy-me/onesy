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
      <path d="M132-172v-536h176l74-80h196l74 80h176v536H132Zm224-154h248v-2q0-32-32.5-49T480-394q-59 0-91.5 17T356-328v2Zm124-140q23 0 38.5-15.5T534-520q0-23-15.5-38.5T480-574q-23 0-38.5 15.5T426-520q0 23 15.5 38.5T480-466Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFrontW100Filled.displayName = 'OnesyIconMaterialPhotoCameraFrontW100Filled';

export default IconMaterialPhotoCameraFrontW100Filled;
