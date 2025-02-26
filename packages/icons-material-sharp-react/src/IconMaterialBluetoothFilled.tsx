import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetoothFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothFilled'

      short_name='Bluetooth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-304L256-200l-56-56 224-224-224-224 56-56 184 184v-304h40l228 228-172 172 172 172L480-80h-40Zm80-496 76-76-76-74v150Zm0 342 76-74-76-76v150Z"/>
    </Icon>
  );
});

IconMaterialBluetoothFilled.displayName = 'OnesyIconMaterialBluetoothFilled';

export default IconMaterialBluetoothFilled;
