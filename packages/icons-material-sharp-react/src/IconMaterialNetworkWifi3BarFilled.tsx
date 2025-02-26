import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkWifi3BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi3BarFilled'

      short_name='NetworkWifi3Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 0-600q96-98 220-149t260-51q137 0 261 51t219 149L480-120ZM232-482q53-38 116-59.5T480-563q69 0 132 21.5T728-482l116-116q-78-59-170.5-90.5T480-720q-101 0-193.5 31.5T116-598l116 116Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi3BarFilled.displayName = 'OnesyIconMaterialNetworkWifi3BarFilled';

export default IconMaterialNetworkWifi3BarFilled;
