import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUploadFile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFile'

      short_name='UploadFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM160-80v-800h400l240 240v560H160Zm360-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
    </Icon>
  );
});

IconMaterialUploadFile.displayName = 'OnesyIconMaterialUploadFile';

export default IconMaterialUploadFile;
