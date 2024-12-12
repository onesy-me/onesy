import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWalletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WalletW100'

      short_name='Wallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-402h640v-106H160v106Zm471 218 169-143v-47H160v75l471 115Z"/>
    </Icon>
  );
});

IconMaterialWalletW100.displayName = 'OnesyIconMaterialWalletW100';

export default IconMaterialWalletW100;
