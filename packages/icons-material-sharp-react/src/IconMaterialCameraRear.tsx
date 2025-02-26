import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraRear = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRear'

      short_name='CameraRear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280v-600h560v600h-80v-520H280v520h-80Zm280-280q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560ZM394-60l-56-56 44-44H200v-80h182l-44-44 56-56 140 140L394-60Zm166-100v-80h200v80H560Zm-80-480Z"/>
    </Icon>
  );
});

IconMaterialCameraRear.displayName = 'OnesyIconMaterialCameraRear';

export default IconMaterialCameraRear;
