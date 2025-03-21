import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditLocationAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAlt'

      short_name='EditLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-880q27 0 53.5 4.5T585-863l-65 66q-10-2-19.5-2.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186q122-112 181-203.5T720-552q0-12-1-24t-3-23l66-66q9 26 13.5 54t4.5 59q0 94-68 201.5T533-127q-11 10-25 15t-28 5q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880Zm0 328Zm254-254-46-46-236 236q-6 6-9 13.5t-3 15.5v37q0 13 8.5 21.5T470-520h37q8 0 15.5-3t13.5-9l236-236-38-38Zm66 10 28-28q11-11 11-28t-11-28l-28-28q-11-11-28-11t-28 11l-28 28 84 84Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAlt.displayName = 'OnesyIconMaterialEditLocationAlt';

export default IconMaterialEditLocationAlt;
