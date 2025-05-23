import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalShipping = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalShipping'

      short_name='LocalShipping'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-50 0-85-35t-35-85H40v-520h640v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z"/>
    </Icon>
  );
});

IconMaterialLocalShipping.displayName = 'OnesyIconMaterialLocalShipping';

export default IconMaterialLocalShipping;
