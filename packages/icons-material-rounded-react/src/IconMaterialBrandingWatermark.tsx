import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrandingWatermark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermark'

      short_name='BrandingWatermark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h280q17 0 28.5-11.5T760-320v-160q0-17-11.5-28.5T720-520H440q-17 0-28.5 11.5T400-480v160q0 17 11.5 28.5T440-280ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialBrandingWatermark.displayName = 'OnesyIconMaterialBrandingWatermark';

export default IconMaterialBrandingWatermark;
