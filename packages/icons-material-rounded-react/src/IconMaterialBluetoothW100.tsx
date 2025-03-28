import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetoothW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothW100'

      short_name='Bluetooth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-174v-272L266-246q-4 4-9.5 4.5T246-246q-5-5-5-10t5-10l214-214-214-214q-4-4-4.5-9.5T246-714q5-5 10-5t10 5l200 200v-272q0-14 9.5-22t20.5-8q5 0 10.5 2t10.5 7l134 134q5 5 7 10t2 11q0 6-2 11t-7 10L500-480l151 151q5 5 7 10t2 11q0 6-2 11t-7 10L517-153q-5 5-10.5 7t-10.5 2q-11 0-20.5-8t-9.5-22Zm28-340 138-138-138-138v276Zm0 344 138-138-138-138v276Z"/>
    </Icon>
  );
});

IconMaterialBluetoothW100.displayName = 'OnesyIconMaterialBluetoothW100';

export default IconMaterialBluetoothW100;
