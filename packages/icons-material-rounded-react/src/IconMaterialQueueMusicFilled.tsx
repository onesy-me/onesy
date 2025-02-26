import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueueMusicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueueMusicFilled'

      short_name='QueueMusic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-160q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 1.5t19 6.5v-288q0-17 11.5-28.5T720-720h120q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640h-80v360q0 50-35 85t-85 35ZM160-320q-17 0-28.5-11.5T120-360q0-17 11.5-28.5T160-400h240q17 0 28.5 11.5T440-360q0 17-11.5 28.5T400-320H160Zm0-160q-17 0-28.5-11.5T120-520q0-17 11.5-28.5T160-560h400q17 0 28.5 11.5T600-520q0 17-11.5 28.5T560-480H160Zm0-160q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h400q17 0 28.5 11.5T600-680q0 17-11.5 28.5T560-640H160Z"/>
    </Icon>
  );
});

IconMaterialQueueMusicFilled.displayName = 'OnesyIconMaterialQueueMusicFilled';

export default IconMaterialQueueMusicFilled;
