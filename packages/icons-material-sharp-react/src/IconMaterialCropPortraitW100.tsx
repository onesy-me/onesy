import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitW100'

      short_name='CropPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-696h536v696H212Zm28-28h480v-640H240v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitW100.displayName = 'OnesyIconMaterialCropPortraitW100';

export default IconMaterialCropPortraitW100;
