import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeW100Filled'

      short_name='CropLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialCropLandscapeW100Filled.displayName = 'OnesyIconMaterialCropLandscapeW100Filled';

export default IconMaterialCropLandscapeW100Filled;
