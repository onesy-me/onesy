import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUploadFileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileFilled'

      short_name='UploadFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z"/>
    </Icon>
  );
});

IconMaterialUploadFileFilled.displayName = 'OnesyIconMaterialUploadFileFilled';

export default IconMaterialUploadFileFilled;
