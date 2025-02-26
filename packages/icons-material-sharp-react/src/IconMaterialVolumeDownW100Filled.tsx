import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownW100Filled'

      short_name='VolumeDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-412v-136h130l126-126v388L382-412H252Zm376 56v-250q29 21 44.5 54.5T688-480q0 38-15.5 70.5T628-356Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownW100Filled.displayName = 'OnesyIconMaterialVolumeDownW100Filled';

export default IconMaterialVolumeDownW100Filled;
