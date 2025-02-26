import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeW100'

      short_name='CropLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialCropLandscapeW100.displayName = 'OnesyIconMaterialCropLandscapeW100';

export default IconMaterialCropLandscapeW100;
