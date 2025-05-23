import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackStarW100Filled'

      short_name='StackStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-304 52 32q5 2 8.5-1t2.07-8.09L649-340l45-39q4-3 2.54-7.39-1.45-4.39-6.55-5.13l-58.97-5.12L607-453q-1.5-5-6.75-5t-7.25 5l-24.02 56.36-58.97 5.12q-5.1.74-6.55 5.13Q502-382 506-379l45 39-13.57 58.91Q536-276 539.5-273t8.5 1l52-32Zm-408-68q-24.75 0-42.37-17.63Q132-407.25 132-432v-336q0-24.75 17.63-42.38Q167.25-828 192-828h336q24.75 0 42.38 17.62Q588-792.75 588-768v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-66q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v336q0 14 9 23t23 9h66q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-66Zm240 240q-24.75 0-42.37-17.63Q372-167.25 372-192v-336q0-24.75 17.63-42.38Q407.25-588 432-588h336q24.75 0 42.38 17.62Q828-552.75 828-528v336q0 24.75-17.62 42.37Q792.75-132 768-132H432Z"/>
    </Icon>
  );
});

IconMaterialStackStarW100Filled.displayName = 'OnesyIconMaterialStackStarW100Filled';

export default IconMaterialStackStarW100Filled;
