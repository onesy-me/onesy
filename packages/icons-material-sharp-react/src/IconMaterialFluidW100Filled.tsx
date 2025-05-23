import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFluidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidW100Filled'

      short_name='Fluid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M714-119H466v-134q-90-5-152-70.5T252-480v-388h456v388q0 91-62 156.5T494-253v106h220v28ZM550-414h119q5-16 8-32.5t3-33.5v-66H546v-28h134v-132H506v-28h174v-106H280v346h110q27 0 51 12t40 34q12 17 30.5 25.5T550-414Z"/>
    </Icon>
  );
});

IconMaterialFluidW100Filled.displayName = 'OnesyIconMaterialFluidW100Filled';

export default IconMaterialFluidW100Filled;
