import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShuffleOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOn'

      short_name='ShuffleOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M21,1H3C1.9,1,1,1.9,1,3v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V3C23,1.9,22.1,1,21,1z M5.41,4l5.18,5.17l-1.42,1.41 L4,5.41L5.41,4z M20,20h-5.5l2.05-2.05l-3.13-3.13l1.41-1.41l3.13,3.13L20,14.5V20z M20,9.5l-2.04-2.04L5.41,20L4,18.59L16.54,6.04 L14.5,4H20V9.5z"/></g>
    </Icon>
  );
});

IconMaterialShuffleOn.displayName = 'OnesyIconMaterialShuffleOn';

export default IconMaterialShuffleOn;
