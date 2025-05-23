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
      <path d="M628.76-212q-36.76 0-62.26-25.38Q541-262.75 541-299q0-37.08 25.67-63.04Q592.33-388 629-388q16.68 0 31.84 7T689-363v-279q0-11.05 7.47-18.53Q703.95-668 715-668h87q11.05 0 18.53 7.46 7.47 7.47 7.47 18.5 0 11.04-7.47 18.54-7.48 7.5-18.53 7.5h-85v317q0 36.25-25.74 61.62Q665.53-212 628.76-212ZM186-384q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h242q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186Zm0-128q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h389q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm0-128q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h389q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Z"/>
    </Icon>
  );
});

IconMaterialQueueMusicW100Filled.displayName = 'OnesyIconMaterialQueueMusicW100Filled';

export default IconMaterialQueueMusicW100Filled;
