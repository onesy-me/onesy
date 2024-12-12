import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraOutdoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoor'

      short_name='CameraOutdoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240v-240h240v80l80-42v164l-80-42v80H480ZM160-120v-480l320-240 320 240v80h-80v-40L480-740 240-560v360h560v80H160Zm320-350Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoor.displayName = 'OnesyIconMaterialCameraOutdoor';

export default IconMaterialCameraOutdoor;
