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
      <path d="M200-800q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v480q0 17-11.5 28.5T720-280q-17 0-28.5-11.5T680-320v-480H280v480q0 17-11.5 28.5T240-280q-17 0-28.5-11.5T200-320v-480Zm280 240q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm-98 400H240q-17 0-28.5-11.5T200-200q0-17 11.5-28.5T240-240h142l-16-16q-11-11-11-28t11-28q11-11 28-11t28 11l84 84q12 12 12 28t-12 28l-84 84q-11 11-28 11t-28-11q-11-11-11-28t11-28l16-16Zm218 0q-17 0-28.5-11.5T560-200q0-17 11.5-28.5T600-240h120q17 0 28.5 11.5T760-200q0 17-11.5 28.5T720-160H600ZM480-640Z"/>
    </Icon>
  );
});

IconMaterialCameraRear.displayName = 'OnesyIconMaterialCameraRear';

export default IconMaterialCameraRear;
