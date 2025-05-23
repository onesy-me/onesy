import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomePinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomePinFilled'

      short_name='HomePin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 333q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Z"/>
    </Icon>
  );
});

IconMaterialHomePinFilled.displayName = 'OnesyIconMaterialHomePinFilled';

export default IconMaterialHomePinFilled;
