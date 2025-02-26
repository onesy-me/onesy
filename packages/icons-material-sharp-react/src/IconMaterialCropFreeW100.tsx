import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropFreeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeW100'

      short_name='CropFree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-188h28v160h160v28H172Zm428 0v-28h160v-160h28v188H600ZM172-600v-188h188v28H200v160h-28Zm588 0v-160H600v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialCropFreeW100.displayName = 'OnesyIconMaterialCropFreeW100';

export default IconMaterialCropFreeW100;
