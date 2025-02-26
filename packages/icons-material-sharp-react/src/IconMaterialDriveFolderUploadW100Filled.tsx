import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFolderUploadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadW100Filled'

      short_name='DriveFolderUpload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Zm334-108h28v-194l91 91 20-20-125-125-123 123 20 20 89-89v194Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadW100Filled.displayName = 'OnesyIconMaterialDriveFolderUploadW100Filled';

export default IconMaterialDriveFolderUploadW100Filled;
