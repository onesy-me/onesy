import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetoothW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothW100Filled'

      short_name='Bluetooth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-116v-330L256-236l-20-20 224-224-224-224 20-20 210 210v-330h14l192 192-172 172 172 172-192 192h-14Zm28-398 138-138-138-138v276Zm0 344 138-138-138-138v276Z"/>
    </Icon>
  );
});

IconMaterialBluetoothW100Filled.displayName = 'OnesyIconMaterialBluetoothW100Filled';

export default IconMaterialBluetoothW100Filled;
