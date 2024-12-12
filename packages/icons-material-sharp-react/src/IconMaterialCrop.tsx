import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop'

      short_name='Crop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-40v-160H200v-480H40v-80h160v-160h80v640h640v80H760v160h-80Zm0-320v-320H360v-80h400v400h-80Z"/>
    </Icon>
  );
});

IconMaterialCrop.displayName = 'OnesyIconMaterialCrop';

export default IconMaterialCrop;
