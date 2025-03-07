import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFluidBalanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidBalanceW100Filled'

      short_name='FluidBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-416q0-24.75 17.63-42.38Q167.25-748 192-748h241q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82 8.38 21.32 8.37 8.5 21.62 8.5h99q-66 0-113 47t-47 113v142q0 32 4.5 62.5T452-264q8 19-1.5 35.5T422-212H192Zm534 96q-24.75 0-42.37-17.63Q666-151.25 666-176v-37q-57-5-95.5-50T532-386v-142q0-24.75 17.25-42.38Q566.5-588 592-588h176q24.75 0 42.38 17.62Q828-552.75 828-528v168q0 58-38.5 100T694-213v37q0 14 9 23t23 9h74q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-74Zm24-258h50v-154q0-13-9.5-22.5T768-560H592q-14 0-23 9.5t-9 22.5v74h30q26 0 50 12t41 34q11.5 17 30.19 25.5T750-374ZM418-546q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h138Zm0 160q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h138Z"/>
    </Icon>
  );
});

IconMaterialFluidBalanceW100Filled.displayName = 'OnesyIconMaterialFluidBalanceW100Filled';

export default IconMaterialFluidBalanceW100Filled;
