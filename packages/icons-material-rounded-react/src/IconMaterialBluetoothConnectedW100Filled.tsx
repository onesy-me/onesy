import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetoothConnectedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothConnectedW100Filled'

      short_name='BluetoothConnected'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-452q-11 0-19.5-8.5T192-480q0-11 8.5-19.5T220-508q11 0 19.5 8.5T248-480q0 11-8.5 19.5T220-452Zm520 0q-11 0-19.5-8.5T712-480q0-11 8.5-19.5T740-508q11 0 19.5 8.5T768-480q0 11-8.5 19.5T740-452ZM466-174v-272L266-246q-4 4-9.5 4.5T246-246q-5-5-5-10t5-10l214-214-214-214q-4-4-4.5-9.5T246-714q5-5 10-5t10 5l200 200v-272q0-14 9.5-22t20.5-8q5 0 10.5 2t10.5 7l134 134q5 5 7 10t2 11q0 6-2 11t-7 10L500-480l151 151q5 5 7 10t2 11q0 6-2 11t-7 10L517-153q-5 5-10.5 7t-10.5 2q-11 0-20.5-8t-9.5-22Zm28-340 138-138-138-138v276Zm0 344 138-138-138-138v276Z"/>
    </Icon>
  );
});

IconMaterialBluetoothConnectedW100Filled.displayName = 'OnesyIconMaterialBluetoothConnectedW100Filled';

export default IconMaterialBluetoothConnectedW100Filled;
