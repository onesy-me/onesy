import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClockLoader80 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClockLoader80'

      short_name='ClockLoader80'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM160-480h320v-320q-134 0-227 93t-93 227Z"/>
    </Icon>
  );
});

IconMaterialClockLoader80.displayName = 'OnesyIconMaterialClockLoader80';

export default IconMaterialClockLoader80;
