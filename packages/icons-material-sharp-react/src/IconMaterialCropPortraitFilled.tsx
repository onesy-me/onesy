import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitFilled'

      short_name='CropPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitFilled.displayName = 'OnesyIconMaterialCropPortraitFilled';

export default IconMaterialCropPortraitFilled;
