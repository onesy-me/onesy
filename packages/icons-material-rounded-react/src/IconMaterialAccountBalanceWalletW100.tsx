import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBalanceWalletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWalletW100'

      short_name='AccountBalanceWallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-304v104-560 456Zm32 132q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v123h-28v-123q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9h496q14 0 23-9t9-23v-123h28v123q0 25-17.5 42.5T728-172H232Zm320-160q-25 0-42.5-17.5T492-392v-176q0-25 17.5-42.5T552-628h216q25 0 42.5 17.5T828-568v176q0 25-17.5 42.5T768-332H552Zm216-28q14 0 23-9t9-23v-176q0-14-9-23t-23-9H552q-14 0-23 9t-9 23v176q0 14 9 23t23 9h216Zm-128-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletW100.displayName = 'OnesyIconMaterialAccountBalanceWalletW100';

export default IconMaterialAccountBalanceWalletW100;
