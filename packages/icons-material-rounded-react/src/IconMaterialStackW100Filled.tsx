import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackW100Filled'

      short_name='Stack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-372q-24.75 0-42.37-17.63Q132-407.25 132-432v-336q0-24.75 17.63-42.38Q167.25-828 192-828h336q24.75 0 42.38 17.62Q588-792.75 588-768v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-66q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v336q0 14 9 23t23 9h66q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-66Zm240 240q-24.75 0-42.37-17.63Q372-167.25 372-192v-336q0-24.75 17.63-42.38Q407.25-588 432-588h336q24.75 0 42.38 17.62Q828-552.75 828-528v336q0 24.75-17.62 42.37Q792.75-132 768-132H432Z"/>
    </Icon>
  );
});

IconMaterialStackW100Filled.displayName = 'OnesyIconMaterialStackW100Filled';

export default IconMaterialStackW100Filled;
