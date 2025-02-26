import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortrait'

      short_name='CropPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80Zm-480-80h480v-640H240v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialCropPortrait.displayName = 'OnesyIconMaterialCropPortrait';

export default IconMaterialCropPortrait;
