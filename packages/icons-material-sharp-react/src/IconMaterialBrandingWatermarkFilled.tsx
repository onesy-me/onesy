import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrandingWatermarkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkFilled'

      short_name='BrandingWatermark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-280h360v-240H400v240ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialBrandingWatermarkFilled.displayName = 'OnesyIconMaterialBrandingWatermarkFilled';

export default IconMaterialBrandingWatermarkFilled;
