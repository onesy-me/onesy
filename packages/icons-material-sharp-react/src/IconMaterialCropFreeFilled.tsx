import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropFreeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeFilled'

      short_name='CropFree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h80v160h160v80H120Zm480 0v-80h160v-160h80v240H600ZM120-600v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80Z"/>
    </Icon>
  );
});

IconMaterialCropFreeFilled.displayName = 'OnesyIconMaterialCropFreeFilled';

export default IconMaterialCropFreeFilled;
