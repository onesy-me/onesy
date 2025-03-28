import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraFront = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFront'

      short_name='CameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-80h182l-44-44 56-56 140 140L394-60l-56-56 44-44H200Zm0-120v-600h560v600h-80v-62q-40-29-90.5-43.5T480-400q-59 0-109.5 14.5T280-342v62h-80Zm80-154q48-23 98.5-34.5T480-480q51 0 101.5 11.5T680-434v-366H280v366Zm280 274v-80h200v80H560Zm-80-360q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 200Zm0-240Z"/>
    </Icon>
  );
});

IconMaterialCameraFront.displayName = 'OnesyIconMaterialCameraFront';

export default IconMaterialCameraFront;
