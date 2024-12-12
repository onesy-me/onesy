import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueueMusic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueueMusic'

      short_name='QueueMusic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-160q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 1.5t19 6.5v-328h200v80H760v360q0 50-35 85t-85 35ZM120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Z"/>
    </Icon>
  );
});

IconMaterialQueueMusic.displayName = 'OnesyIconMaterialQueueMusic';

export default IconMaterialQueueMusic;
