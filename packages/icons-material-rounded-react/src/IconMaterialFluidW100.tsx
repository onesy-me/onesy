import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFluidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidW100'

      short_name='Fluid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-119q-23 0-38.5-15.5T466-173v-80q-90-5-152-70.5T252-480v-328q0-24.75 17.63-42.38Q287.25-868 312-868h336q24.75 0 42.38 17.62Q708-832.75 708-808v328q0 91-62 156.5T494-253v74q0 14 9 23t23 9h174q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H520Zm30-295h119q5-16 8-32.5t3-33.5v-66H560q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h120v-132H520q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h160v-74q0-14-9-23t-23-9H312q-14 0-23 9t-9 23v314h110q26.9 0 50.95 12Q465-470 481-448q12 17 30.52 25.5Q530.05-414 550-414Zm-70 134q57 0 104-29t73-77H550q-26.9 0-50.95-12Q475-410 459-432q-12-17-30.52-25.5Q409.95-466 390-466H280q5 78 62.5 132T480-280Zm-10-159Z"/>
    </Icon>
  );
});

IconMaterialFluidW100.displayName = 'OnesyIconMaterialFluidW100';

export default IconMaterialFluidW100;
