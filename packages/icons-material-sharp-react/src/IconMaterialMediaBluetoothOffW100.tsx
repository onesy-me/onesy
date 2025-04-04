import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaBluetoothOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOffW100'

      short_name='MediaBluetoothOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M796-124 646-274l-56 56-20-20 56-56-212-212v216q0 47-32 77.5T306-182q-44 0-76-30t-32-78q0-45 31.5-76.5T306-398q29 0 49 11t31 25v-172L140-780l20-20 656 656-20 20Zm30-124L568-504l20-20 120 120v-196h10l128 128-104 102 104 102-20 20Zm-90-156 70-68-70-70v138ZM414-660l-28-28v-90h182v84H414v34Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOffW100.displayName = 'OnesyIconMaterialMediaBluetoothOffW100';

export default IconMaterialMediaBluetoothOffW100;
