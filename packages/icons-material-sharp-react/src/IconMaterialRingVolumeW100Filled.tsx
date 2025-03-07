import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRingVolumeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeW100Filled'

      short_name='RingVolume'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M163-179 52-288l21-22q85-85 193-127.5T480-480q106 0 213.5 42.5T886-310l22 22-111 109-131-99v-140q-48-17-95-25.5t-91-8.5q-44 0-91 8.5T294-418v140l-131 99Zm304-507v-148h28v148h-28Zm238 102-20-20 106-104 20 20-106 104Zm-448 0L149-686l22-22 106 104-20 20Z"/>
    </Icon>
  );
});

IconMaterialRingVolumeW100Filled.displayName = 'OnesyIconMaterialRingVolumeW100Filled';

export default IconMaterialRingVolumeW100Filled;
