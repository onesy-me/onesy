import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackGroupW100Filled'

      short_name='StackGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M432-132q-24.75 0-42.37-17.63Q372-167.25 372-192v-148q0-14-9-23t-23-9H192q-24.75 0-42.37-17.63Q132-407.25 132-432v-336q0-24.75 17.63-42.38Q167.25-828 192-828h336q24.75 0 42.38 17.62Q588-792.75 588-768v148q0 14 9 23t23 9h148q24.75 0 42.38 17.62Q828-552.75 828-528v336q0 24.75-17.62 42.37Q792.75-132 768-132H432Z"/>
    </Icon>
  );
});

IconMaterialStackGroupW100Filled.displayName = 'OnesyIconMaterialStackGroupW100Filled';

export default IconMaterialStackGroupW100Filled;
