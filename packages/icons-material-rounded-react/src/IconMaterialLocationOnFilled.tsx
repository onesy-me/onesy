import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOnFilled'

      short_name='LocationOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Zm0-373q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialLocationOnFilled.displayName = 'OnesyIconMaterialLocationOnFilled';

export default IconMaterialLocationOnFilled;
