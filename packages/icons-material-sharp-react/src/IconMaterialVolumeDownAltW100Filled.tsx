import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeDownAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAltW100Filled'

      short_name='VolumeDownAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-412v-136h130l126-126v388L382-412H252Zm376 56v-250q29 21 44.5 54.5T688-480q0 38-15.5 70.5T628-356Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownAltW100Filled.displayName = 'OnesyIconMaterialVolumeDownAltW100Filled';

export default IconMaterialVolumeDownAltW100Filled;
