import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationFilled'

      short_name='EditLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m554-577-57-57-145 144q-6 6-9 13.5t-3 15.5v21q0 8 6 14t14 6h21q8 0 15.5-3t13.5-9l144-145Zm29-29 28-28q5-5 5-10.5t-5-10.5l-36-36q-5-5-10.5-5t-10.5 5l-28 28 57 57ZM480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Z"/>
    </Icon>
  );
});

IconMaterialEditLocationFilled.displayName = 'OnesyIconMaterialEditLocationFilled';

export default IconMaterialEditLocationFilled;
