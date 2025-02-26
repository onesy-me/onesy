import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddPhotoAlternateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateFilled'

      short_name='AddPhotoAlternate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-600v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-280h480L570-480 450-320l-90-120-120 160ZM120-120v-720h400v240h80v80h240v400H120Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateFilled.displayName = 'OnesyIconMaterialAddPhotoAlternateFilled';

export default IconMaterialAddPhotoAlternateFilled;
