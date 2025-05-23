import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaBluetoothOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOnW100Filled'

      short_name='MediaBluetoothOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M274-182q-45 0-76.5-31.5T166-290q0-45 31.5-76.5T274-398q23 0 44 9t36 27v-416h182v84H382v404q0 45-31.5 76.5T274-182Zm384 52v-196L538-206l-20-20 134-134-136-134 20-20 120 120v-196h10l128 128-104 102 104 102-126 128h-10Zm26-58 70-70-70-68v138Zm0-206 70-68-70-70v138Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOnW100Filled.displayName = 'OnesyIconMaterialMediaBluetoothOnW100Filled';

export default IconMaterialMediaBluetoothOnW100Filled;
