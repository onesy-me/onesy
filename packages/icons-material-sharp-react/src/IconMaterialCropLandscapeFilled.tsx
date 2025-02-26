import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeFilled'

      short_name='CropLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialCropLandscapeFilled.displayName = 'OnesyIconMaterialCropLandscapeFilled';

export default IconMaterialCropLandscapeFilled;
