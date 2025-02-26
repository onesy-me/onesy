import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBalanceWalletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWalletFilled'

      short_name='AccountBalanceWallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v80H360v560h480v80H120Zm320-160v-400h440v400H440Zm200-140q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletFilled.displayName = 'OnesyIconMaterialAccountBalanceWalletFilled';

export default IconMaterialAccountBalanceWalletFilled;
