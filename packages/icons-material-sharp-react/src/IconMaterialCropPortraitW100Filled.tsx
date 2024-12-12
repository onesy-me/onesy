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
      <path d="M212-132v-696h536v696H212Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitW100Filled.displayName = 'OnesyIconMaterialCropPortraitW100Filled';

export default IconMaterialCropPortraitW100Filled;
