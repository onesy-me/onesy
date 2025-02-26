import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFolderUploadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadFilled'

      short_name='DriveFolderUpload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm360-120h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadFilled.displayName = 'OnesyIconMaterialDriveFolderUploadFilled';

export default IconMaterialDriveFolderUploadFilled;
