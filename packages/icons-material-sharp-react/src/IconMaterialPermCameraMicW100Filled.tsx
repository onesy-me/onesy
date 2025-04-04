import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermCameraMicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMicW100Filled'

      short_name='PermCameraMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-536h176l74-80h196l74 80h176v536H494v-140q74-8 124-61t50-127h-28q0 66-47 113t-113 47q-66 0-113-47t-47-113h-28q0 74 50 127t124 61v140H132Zm348-288q16.5 0 28.25-11.75T520-500v-160q0-16.5-11.75-28.25T480-700q-16.5 0-28.25 11.75T440-660v160q0 16.5 11.75 28.25T480-460Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMicW100Filled.displayName = 'OnesyIconMaterialPermCameraMicW100Filled';

export default IconMaterialPermCameraMicW100Filled;
