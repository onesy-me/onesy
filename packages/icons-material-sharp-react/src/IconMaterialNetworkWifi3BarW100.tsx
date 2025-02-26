import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkWifi3BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi3BarW100'

      short_name='NetworkWifi3Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-194 74-600q83-71 185.5-109.5T480-748q118 0 220.5 38.5T886-600L480-194ZM232-482q53-38 116-59.5T480-563q69 0 132 21.5T728-482l116-116q-78-59-170.5-90.5T480-720q-101 0-193.5 31.5T116-598l116 116Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi3BarW100.displayName = 'OnesyIconMaterialNetworkWifi3BarW100';

export default IconMaterialNetworkWifi3BarW100;
