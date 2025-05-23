import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLoupeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoupeW100Filled'

      short_name='Loupe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-306h28v-160h160v-28H494v-160h-28v160H306v28h160v160Zm14 174q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480v348H480Z"/>
    </Icon>
  );
});

IconMaterialLoupeW100Filled.displayName = 'OnesyIconMaterialLoupeW100Filled';

export default IconMaterialLoupeW100Filled;
