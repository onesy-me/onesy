import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVignetteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteW100Filled'

      short_name='Vignette'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm348-134q88 0 151-39.78T694-480q0-54.44-63-94.22T480-614q-88 0-151 39.78T266-480q0 54.44 63 94.22T480-346Z"/>
    </Icon>
  );
});

IconMaterialVignetteW100Filled.displayName = 'OnesyIconMaterialVignetteW100Filled';

export default IconMaterialVignetteW100Filled;
