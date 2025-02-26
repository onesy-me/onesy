import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraRearFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearFilled'

      short_name='CameraRear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m394-60-56-56 44-44H200v-80h182l-44-44 56-56 140 140L394-60Zm166-100v-80h200v80H560ZM200-280v-600h560v600H511L394-397 277-280h-77Zm280-280q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Z"/>
    </Icon>
  );
});

IconMaterialCameraRearFilled.displayName = 'OnesyIconMaterialCameraRearFilled';

export default IconMaterialCameraRearFilled;
