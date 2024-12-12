import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wallet'

      short_name='Wallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-480h640v-80H160v80Zm471 243 169-142v-21H160v49l471 114Z"/>
    </Icon>
  );
});

IconMaterialWallet.displayName = 'OnesyIconMaterialWallet';

export default IconMaterialWallet;
