import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPortraitLightingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PortraitLightingFilled'

      short_name='PortraitLighting'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 576q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160 856v-72q0-34 17.5-62.5T224 678q62-31 126-46.5T480 616q66 0 130 15.5T736 678q29 15 46.5 43.5T800 784v72q0 17-11.5 28.5T760 896H200q-17 0-28.5-11.5T160 856Zm320-40h240v-32q0-11-5.5-20T700 750q-54-27-109-40.5T480 696v120Zm0-320q33 0 56.5-23.5T560 416q0-33-23.5-56.5T480 336v160Z"/>
    </Icon>
  );
});

IconMaterialPortraitLightingFilled.displayName = 'OnesyIconMaterialPortraitLightingFilled';

export default IconMaterialPortraitLightingFilled;
