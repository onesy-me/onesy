import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShield = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shield'

      short_name='Shield'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/>
    </Icon>
  );
});

IconMaterialShield.displayName = 'OnesyIconMaterialShield';

export default IconMaterialShield;
