import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBalanceWalletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWalletW100Filled'

      short_name='AccountBalanceWallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v132H464v352h324v132H172Zm320-160v-296h336v296H492Zm148-88q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletW100Filled.displayName = 'OnesyIconMaterialAccountBalanceWalletW100Filled';

export default IconMaterialAccountBalanceWalletW100Filled;
