import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricMoped = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMoped'

      short_name='ElectricMoped'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-40 280-160h160v-80l240 120H520v80ZM280-280q-50 0-85-35t-35-85H80v-280h320v200h140l140-174v-106H560v-80h200v214L580-400H400q0 50-35 85t-85 35Zm40-200Zm-40 120q17 0 28.5-11.5T320-400h-80q0 17 11.5 28.5T280-360Zm-80-360v-80h200v80H200Zm560 440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-400q0-17-11.5-28.5T760-440q-17 0-28.5 11.5T720-400q0 17 11.5 28.5T760-360ZM160-480h160v-120H160v120Z"/>
    </Icon>
  );
});

IconMaterialElectricMoped.displayName = 'OnesyIconMaterialElectricMoped';

export default IconMaterialElectricMoped;
