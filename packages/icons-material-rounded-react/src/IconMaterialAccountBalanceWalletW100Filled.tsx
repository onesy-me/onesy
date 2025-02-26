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
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v72H552q-41 0-64.5 23.5T464-568v176q0 41 23.5 64.5T552-304h236v72q0 26-17 43t-43 17H232Zm320-160q-26 0-43-17t-17-43v-176q0-26 17-43t43-17h216q26 0 43 17t17 43v176q0 26-17 43t-43 17H552Zm88-88q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletW100Filled.displayName = 'OnesyIconMaterialAccountBalanceWalletW100Filled';

export default IconMaterialAccountBalanceWalletW100Filled;
