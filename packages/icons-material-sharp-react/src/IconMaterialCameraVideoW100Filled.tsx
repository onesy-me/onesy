import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraVideoW100Filled'

      short_name='CameraVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.81-454Q436-454 405-485.19q-31-31.2-31-75Q374-604 405.19-635q31.2-31 75-31Q524-666 555-634.81q31 31.2 31 75Q586-516 554.81-485q-31.2 31-75 31ZM259.96-614q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5ZM186-172v-28h125l33-133q-89-6-150.5-71T132-560q0-95.27 66.36-161.64Q264.73-788 360-788h240q95.27 0 161.64 66.36Q828-655.27 828-560q0 91-61.5 156T616-333l33 133h125v28H186Zm294-254q56 0 95-39t39-95q0-56-39-95t-95-39q-56 0-95 39t-39 95q0 56 39 95t95 39Z"/>
    </Icon>
  );
});

IconMaterialCameraVideoW100Filled.displayName = 'OnesyIconMaterialCameraVideoW100Filled';

export default IconMaterialCameraVideoW100Filled;
