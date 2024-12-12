import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrandingWatermarkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkW100'

      short_name='BrandingWatermark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-306h308v-224H426v224Zm-294 94v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialBrandingWatermarkW100.displayName = 'OnesyIconMaterialBrandingWatermarkW100';

export default IconMaterialBrandingWatermarkW100;
