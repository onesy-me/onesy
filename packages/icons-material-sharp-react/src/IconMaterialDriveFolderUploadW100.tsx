import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFolderUploadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadW100'

      short_name='DriveFolderUpload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-320h28v-194l91 91 20-20-125-125-123 123 20 20 89-89v194ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h187l80 80h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-336q0-14-9-23t-23-9H448l-80-80H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadW100.displayName = 'OnesyIconMaterialDriveFolderUploadW100';

export default IconMaterialDriveFolderUploadW100;
