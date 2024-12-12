import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraightenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenW100Filled'

      short_name='Straighten'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-292q-26 0-43-17t-17-43.33v-255.34Q132-634 149-651t43-17h114v134q0 5.95 4.04 9.97 4.03 4.03 10 4.03 5.96 0 9.96-4.03 4-4.02 4-9.97v-134h132v134q0 5.95 4.04 9.97 4.03 4.03 10 4.03 5.96 0 9.96-4.03 4-4.02 4-9.97v-134h132v134q0 5.95 4.04 9.97 4.03 4.03 10 4.03 5.96 0 9.96-4.03 4-4.02 4-9.97v-134h114q26 0 43 17t17 43.33v255.34Q828-326 811-309t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialStraightenW100Filled.displayName = 'OnesyIconMaterialStraightenW100Filled';

export default IconMaterialStraightenW100Filled;
