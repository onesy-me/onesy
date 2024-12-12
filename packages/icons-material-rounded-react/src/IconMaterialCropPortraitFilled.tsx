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
      <path d="M720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitFilled.displayName = 'OnesyIconMaterialCropPortraitFilled';

export default IconMaterialCropPortraitFilled;
