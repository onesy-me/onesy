import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFluidBalanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidBalanceW100'

      short_name='FluidBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v60h-28v-32H160v480h332v28H132Zm28-28v-480 480Zm654 124H666v-97q-57-5-95.5-47T532-360v-228h296v228q0 58-38.5 100T694-213v69h120v28Zm-64-258h50v-186H560v106h30q26 0 50 12t41 34q11.5 17 30.19 25.5T750-374Zm-70 134q46 0 80-30.5t39-75.5h-49q-26.9 0-50.95-11.5Q675-369 658-391q-12-17-29.95-26T590-426h-30v66q0 51 34.5 85.5T680-240Zm-22-168ZM266-546h166v-28H266v28Zm0 160h166v-28H266v28Z"/>
    </Icon>
  );
});

IconMaterialFluidBalanceW100.displayName = 'OnesyIconMaterialFluidBalanceW100';

export default IconMaterialFluidBalanceW100;
