import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaBluetoothOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOn'

      short_name='MediaBluetoothOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T360-418v-422h240v160H440v400q0 66-47 113t-113 47Zm400 0v-182L570-192l-34-34 134-134-136-134 34-34 110 110v-182h24l138 138-104 102 104 102-136 138h-24Zm46-92 46-46-46-44v90Zm0-206 46-44-46-46v90Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOn.displayName = 'OnesyIconMaterialMediaBluetoothOn';

export default IconMaterialMediaBluetoothOn;
