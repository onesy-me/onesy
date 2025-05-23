import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueueMusicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueueMusicW100Filled'

      short_name='QueueMusic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M628.76-212q-36.76 0-62.26-25.38Q541-262.75 541-299q0-37.08 25.67-63.04Q592.33-388 629-388q16.68 0 31.84 7T689-363v-305h139v52H717v317q0 36.25-25.74 61.62Q665.53-212 628.76-212ZM172-384v-28h270v28H172Zm0-128v-28h417v28H172Zm0-128v-28h417v28H172Z"/>
    </Icon>
  );
});

IconMaterialQueueMusicW100Filled.displayName = 'OnesyIconMaterialQueueMusicW100Filled';

export default IconMaterialQueueMusicW100Filled;
