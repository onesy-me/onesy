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
      <path d="M520-119q-23 0-38.5-15.5T466-173v-80q-90-5-152-70.5T252-480v-328q0-25 17.5-42.5T312-868h336q25 0 42.5 17.5T708-808v328q0 91-62 156.5T494-253v74q0 14 9 23t23 9h174q6 0 10 4t4 10q0 6-4 10t-10 4H520Zm30-295h119q5-16 8-32.5t3-33.5v-66H560q-6 0-10-4t-4-10q0-6 4-10t10-4h120v-132H520q-6 0-10-4t-4-10q0-6 4-10t10-4h160v-74q0-14-9-23t-23-9H312q-14 0-23 9t-9 23v314h110q27 0 51 12t40 34q12 17 30.5 25.5T550-414Z"/>
    </Icon>
  );
});

IconMaterialFluidW100Filled.displayName = 'OnesyIconMaterialFluidW100Filled';

export default IconMaterialFluidW100Filled;
