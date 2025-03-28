import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWalletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WalletW100Filled'

      short_name='Wallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-212q-45 0-76.5-31.5T132-320v-320q0-45 31.5-76.5T240-748h480q45 0 76.5 31.5T828-640v320q0 45-31.5 76.5T720-212H240Zm0-402h480q24 0 44.5 9t35.5 26v-61q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v61q15-17 35.5-26t44.5-9Zm-80 103 456 111q7 2 14.5.5T643-406l152-129q-8-23-28.5-37T720-586H240q-32 0-55 21.5T160-511Z"/>
    </Icon>
  );
});

IconMaterialWalletW100Filled.displayName = 'OnesyIconMaterialWalletW100Filled';

export default IconMaterialWalletW100Filled;
