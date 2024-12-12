import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoCameraBackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackW100'

      short_name='PhotoCameraBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-536h176l74-80h196l74 80h176v536H132Zm28-28h640v-480H640l-74-80H394l-74 80H160v480Zm320-240ZM318-300h332L548-436 448-312l-64-74-66 86Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraBackW100.displayName = 'OnesyIconMaterialPhotoCameraBackW100';

export default IconMaterialPhotoCameraBackW100;
