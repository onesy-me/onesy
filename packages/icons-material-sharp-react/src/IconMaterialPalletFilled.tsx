import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPalletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PalletFilled'

      short_name='Pallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-160h800v160H760v-80H540v80H420v-80H200v80H80Zm120-240v-560h560v560H200Zm160-320h240v-80H360v80Z"/>
    </Icon>
  );
});

IconMaterialPalletFilled.displayName = 'OnesyIconMaterialPalletFilled';

export default IconMaterialPalletFilled;
