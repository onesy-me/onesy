import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraIndoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoor'

      short_name='CameraIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280h240v-80l80 42v-164l-80 42v-80H320v240ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoor.displayName = 'OnesyIconMaterialCameraIndoor';

export default IconMaterialCameraIndoor;
