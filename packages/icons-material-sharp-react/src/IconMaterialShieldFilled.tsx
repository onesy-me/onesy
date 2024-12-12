import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldFilled'

      short_name='Shield'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialShieldFilled.displayName = 'OnesyIconMaterialShieldFilled';

export default IconMaterialShieldFilled;
