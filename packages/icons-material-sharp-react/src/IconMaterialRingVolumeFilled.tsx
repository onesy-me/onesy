import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRingVolumeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeFilled'

      short_name='RingVolume'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M161-120 16-261l40-41q87-89 198.5-133.5T480-480q114 0 225 44.5T904-302l40 41-145 141-159-120v-134q-38-12-78-19t-82-7q-42 0-82 7t-78 19v134L161-120Zm279-560v-200h80v200h-80Zm264 114-56-58 142-142 56 58-142 142Zm-448 0L114-708l56-58 142 142-56 58Z"/>
    </Icon>
  );
});

IconMaterialRingVolumeFilled.displayName = 'OnesyIconMaterialRingVolumeFilled';

export default IconMaterialRingVolumeFilled;
