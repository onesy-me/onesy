import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrandingWatermarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkW100Filled'

      short_name='BrandingWatermark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M456-306h248q13 0 21.5-8.5T734-336v-164q0-13-8.5-21.5T704-530H456q-13 0-21.5 8.5T426-500v164q0 13 8.5 21.5T456-306Zm-264 94q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialBrandingWatermarkW100Filled.displayName = 'OnesyIconMaterialBrandingWatermarkW100Filled';

export default IconMaterialBrandingWatermarkW100Filled;
