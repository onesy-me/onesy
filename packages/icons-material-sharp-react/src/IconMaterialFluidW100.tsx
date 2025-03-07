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
      <path d="M714-119H466v-134q-90-5-152-70.5T252-480v-388h456v388q0 91-62 156.5T494-253v106h220v28ZM550-414h119q5-16 8-32.5t3-33.5v-66H546v-28h134v-132H506v-28h174v-106H280v346h110q26.9 0 50.95 12Q465-470 481-448q12 17 30.52 25.5Q530.05-414 550-414Zm-70 134q57 0 104-29t73-77H550q-26.9 0-50.95-12Q475-410 459-432q-12-17-30.52-25.5Q409.95-466 390-466H280q5 78 62.5 132T480-280Zm-10-159Z"/>
    </Icon>
  );
});

IconMaterialFluidW100.displayName = 'OnesyIconMaterialFluidW100';

export default IconMaterialFluidW100;
