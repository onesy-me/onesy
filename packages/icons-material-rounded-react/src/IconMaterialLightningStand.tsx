import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightningStand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightningStand'

      short_name='LightningStand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-121 0-200.5-32.5T200-220q0-75 79.5-107.5T480-360q121 0 200.5 32.5T760-220q0 75-79.5 107.5T480-80Zm0-80q-101 0-162-21t-74-59q-2 5-3 10t-1 10q0 45 65.5 72.5T480-120q109 0 174.5-27.5T720-220q0-5-1-10t-3-10q-13 38-74 59t-162 21Zm0-40q88 0 144-17t56-43q0-26-56-43t-144-17q-88 0-144 17t-56 43q0 26 56 43t144 17Zm-40-400h-46q-11 0-17-10t0-20l124-217q4-7 11.5-5t7.5 10v162h46q11 0 17 10t0 20L459-433q-4 7-11.5 5t-7.5-10v-162Zm40 400Zm0 80Zm0-40Z"/>
    </Icon>
  );
});

IconMaterialLightningStand.displayName = 'OnesyIconMaterialLightningStand';

export default IconMaterialLightningStand;
