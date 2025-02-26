import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkEraseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkEraseW100Filled'

      short_name='PhonelinkErase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-92v-776h456v184h-28v-62H240v532h400v-62h28v184H212Zm338-264-20-20 104-104-104-104 20-20 104 104 104-104 20 20-104 104 104 104-20 20-104-104-104 104Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkEraseW100Filled.displayName = 'OnesyIconMaterialPhonelinkEraseW100Filled';

export default IconMaterialPhonelinkEraseW100Filled;
