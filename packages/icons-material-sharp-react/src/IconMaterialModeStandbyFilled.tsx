import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeStandbyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeStandbyFilled'

      short_name='ModeStandby'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialModeStandbyFilled.displayName = 'OnesyIconMaterialModeStandbyFilled';

export default IconMaterialModeStandbyFilled;
