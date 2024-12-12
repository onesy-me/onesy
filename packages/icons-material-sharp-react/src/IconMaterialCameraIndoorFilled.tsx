import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraIndoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorFilled'

      short_name='CameraIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-480l320-240 320 240v480H160Zm160-160h240v-80l80 42v-164l-80 42v-80H320v240Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorFilled.displayName = 'OnesyIconMaterialCameraIndoorFilled';

export default IconMaterialCameraIndoorFilled;
