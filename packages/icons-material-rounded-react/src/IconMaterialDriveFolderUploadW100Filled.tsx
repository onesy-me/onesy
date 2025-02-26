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
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm288-108q6 0 10-4t4-10v-180l81 81q4 4 9.5 4.5T595-433q5-5 5-10t-5-10l-94-94q-9-9-21-9t-21 9l-92 92q-4 4-4.5 9.5T367-435q5 5 10 5t10-5l79-79v180q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadW100Filled.displayName = 'OnesyIconMaterialDriveFolderUploadW100Filled';

export default IconMaterialDriveFolderUploadW100Filled;
