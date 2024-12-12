import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitW100Filled'

      short_name='CropPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M688-132H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576q0 26-17 43t-43 17Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitW100Filled.displayName = 'OnesyIconMaterialCropPortraitW100Filled';

export default IconMaterialCropPortraitW100Filled;
