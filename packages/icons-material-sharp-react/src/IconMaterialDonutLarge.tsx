import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDonutLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutLarge'

      short_name='DonutLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M441-82Q287-97 184-211T81-480q0-155 103-269t257-129v120q-104 14-172 93t-68 185q0 106 68 185t172 93v120Zm80 0v-120q94-12 159-78t79-160h120q-14 143-114.5 243.5T521-82Zm238-438q-14-94-79-160t-159-78v-120q143 14 243.5 114.5T879-520H759Z"/>
    </Icon>
  );
});

IconMaterialDonutLarge.displayName = 'OnesyIconMaterialDonutLarge';

export default IconMaterialDonutLarge;
