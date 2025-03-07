import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditLocationAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltFilled'

      short_name='EditLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q27 0 53.5 4.5T585-863L383-660q-11 11-17 25.5t-6 30.5v84q0 33 23.5 56.5T440-440h84q16 0 30.5-6t25.5-17l202-202q9 26 13.5 54t4.5 59q0 94-68 201.5T533-127q-11 10-25 15t-28 5Zm254-699 38 38-236 236q-6 6-13.5 9t-15.5 3h-37q-13 0-21.5-8.5T440-550v-37q0-8 3-15.5t9-13.5l236-236 46 46Zm66 10-84-84 28-28q11-11 28-11t28 11l28 28q11 11 11 28t-11 28l-28 28Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltFilled.displayName = 'OnesyIconMaterialEditLocationAltFilled';

export default IconMaterialEditLocationAltFilled;
