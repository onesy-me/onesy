import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontFilled'

      short_name='CameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-800q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v440q0 33-23.5 56.5T680-280H536q-12 0-23.5-5T493-298l-42-42q-23-23-57-23t-57 23l-32 32q-9 9-19.5 13t-21.5 4q-24 0-44-18t-20-48v-443Zm80 366q48-23 98.5-34.5T480-480q51 0 101.5 11.5T680-434v-366H280v366Zm200-86q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-98 360H240q-17 0-28.5-11.5T200-200q0-17 11.5-28.5T240-240h142l-16-16q-11-11-11-28t11-28q11-11 28-11t28 11l84 84q12 12 12 28t-12 28l-84 84q-11 11-28 11t-28-11q-11-11-11-28t11-28l16-16Zm218 0q-17 0-28.5-11.5T560-200q0-17 11.5-28.5T600-240h120q17 0 28.5 11.5T760-200q0 17-11.5 28.5T720-160H600Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontFilled.displayName = 'OnesyIconMaterialCameraFrontFilled';

export default IconMaterialCameraFrontFilled;
