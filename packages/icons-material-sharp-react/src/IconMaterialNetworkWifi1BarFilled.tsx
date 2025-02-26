import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkWifi1BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi1BarFilled'

      short_name='NetworkWifi1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 0-600q96-98 220-149t260-51q137 0 261 51t219 149L480-120ZM361-353q25-18 55.5-28t63.5-10q33 0 63.5 10t55.5 28l245-245q-78-59-170.5-90.5T480-720q-101 0-193.5 31.5T116-598l245 245Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi1BarFilled.displayName = 'OnesyIconMaterialNetworkWifi1BarFilled';

export default IconMaterialNetworkWifi1BarFilled;
