import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularNullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNullW100'

      short_name='SignalCellularNull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-132q-15 0-21-13.5t5-24.5l620-620q11-11 24.5-5t13.5 21v612q0 13-8.5 21.5T798-132H186Zm14-28h600v-600L200-160Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNullW100.displayName = 'OnesyIconMaterialSignalCellularNullW100';

export default IconMaterialSignalCellularNullW100;
