import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetoothDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDisabledW100Filled'

      short_name='BluetoothDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-446 266-246q-4 4-9.5 4.5T246-246q-5-5-5-10t5-10l214-214-310-310q-4-4-4.5-9.5T150-810q5-5 10-5t10 5l698 698q4 4 4.5 9.5T868-92q-5 5-10 5t-10-5L652-288 517-153q-5 5-10.5 7t-10.5 2q-11 0-20.5-8t-9.5-22v-272Zm28 276 138-138-138-138v276Zm56-360-20-20 102-102-138-138v204l-28-28v-172q0-14 9.5-22t20.5-8q5 0 10.5 2t10.5 7l134 134q5 5 7 10t2 11q0 6-2 11t-7 10L550-530Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDisabledW100Filled.displayName = 'OnesyIconMaterialBluetoothDisabledW100Filled';

export default IconMaterialBluetoothDisabledW100Filled;
