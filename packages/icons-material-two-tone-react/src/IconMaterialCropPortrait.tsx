import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortrait'

      short_name='CropPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"/>
    </Icon>
  );
});

IconMaterialCropPortrait.displayName = 'OnesyIconMaterialCropPortrait';

export default IconMaterialCropPortrait;
