import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVignetteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteW100'

      short_name='Vignette'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-346q88 0 151-39.78T694-480q0-54.44-63-94.22T480-614q-88 0-151 39.78T266-480q0 54.44 63 94.22T480-346Zm0-28q-75 0-130.5-31.5T294-480q0-43 55.5-74.5T480-586q75 0 130.5 31.5T666-480q0 43-55.5 74.5T480-374ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVignetteW100.displayName = 'OnesyIconMaterialVignetteW100';

export default IconMaterialVignetteW100;
