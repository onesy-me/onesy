import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBluetoothSearchingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothSearchingW100'

      short_name='BluetoothSearching'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-116v-330L192-236l-20-20 224-224-224-224 20-20 210 210v-330h14l192 192-172 172 172 172-192 192h-14Zm28-398 138-138-138-138v276Zm0 344 138-138-138-138v276Zm240-254-56-56 56-56q4 14 7 28t3 28q0 14-2.5 28t-7.5 28Zm80 80-20-20q14-27 22-56t8-60q0-31-8-60t-22-56l20-20q19 31 28.5 65.5T788-480q0 36-9.5 70.5T750-344Z"/>
    </Icon>
  );
});

IconMaterialBluetoothSearchingW100.displayName = 'OnesyIconMaterialBluetoothSearchingW100';

export default IconMaterialBluetoothSearchingW100;
