import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFolderUpload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUpload'

      short_name='DriveFolderUpload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm320-40q17 0 28.5-11.5T520-320v-128l36 36q11 11 28 11t28-11q11-11 11-28t-11-28L508-572q-12-12-28-12t-28 12L348-468q-11 11-11 28t11 28q11 11 28 11t28-11l36-36v128q0 17 11.5 28.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUpload.displayName = 'OnesyIconMaterialDriveFolderUpload';

export default IconMaterialDriveFolderUpload;
