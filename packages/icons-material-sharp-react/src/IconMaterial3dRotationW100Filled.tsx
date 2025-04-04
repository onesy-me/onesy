import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3dRotationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3dRotationW100Filled'

      short_name='3dRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480h28q0 128 87 220t215 100l-64-64 20-20 108 108q-11 2-23 3t-23 1Zm36-244v-208h120l28 28v152l-28 28H516Zm-220 0v-28h120v-62h-80v-28h80v-62H296v-28h148v208H296Zm248-28h92v-152h-92v152Zm256-76q0-128-87-220T498-800l64 64-20 20-108-108q11-2 23-3t23-1q72.21 0 135.72 27.41 63.51 27.4 110.49 74.38t74.38 110.49Q828-552.21 828-480h-28Z"/>
    </Icon>
  );
});

IconMaterial3dRotationW100Filled.displayName = 'OnesyIconMaterial3dRotationW100Filled';

export default IconMaterial3dRotationW100Filled;
