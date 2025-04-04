import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFluidBalanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidBalanceFilled'

      short_name='FluidBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h267q17 0 28.5 11.5T467-760t11.5 28.5Q490-720 507-720h93q-66 0-113 47t-47 113v200q0 33 8 65.5t22 61.5q13 26 1 49.5T433-160H160ZM760-40q-33 0-56.5-23.5T680-120v-44q-69-14-114.5-68.5T520-360v-200q0-33 23-56.5t57-23.5h240q33 0 56.5 23.5T920-560v200q0 73-45.5 127.5T760-164v44h80q17 0 28.5 11.5T880-80q0 17-11.5 28.5T840-40h-80Zm30-360h50v-160H600v80h30q33 0 62.5 15t49.5 41q8 12 21 18t27 6ZM400-520q17 0 28.5-11.5T440-560q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520h120Zm0 160q17 0 28.5-11.5T440-400q0-17-11.5-28.5T400-440H280q-17 0-28.5 11.5T240-400q0 17 11.5 28.5T280-360h120Z"/>
    </Icon>
  );
});

IconMaterialFluidBalanceFilled.displayName = 'OnesyIconMaterialFluidBalanceFilled';

export default IconMaterialFluidBalanceFilled;
