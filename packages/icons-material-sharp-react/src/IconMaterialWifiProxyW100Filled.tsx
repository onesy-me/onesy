import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiProxyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxyW100Filled'

      short_name='WifiProxy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-194 74-600q85-73 189.5-110.5T480-748q112 0 216.5 37.5T886-600l-65 65q-18-6-36.88-9-18.87-3-38.12-3-95.6 0-162.8 67.2Q516-412.6 516-317q0 19.25 3 38.12 3 18.88 9 36.88l-48 48Zm156-3v-238h133v105h105v133H636Zm28-133h77v-77h-77v77Zm0 105h77v-77h-77v77Zm105 0h77v-77h-77v77Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyW100Filled.displayName = 'OnesyIconMaterialWifiProxyW100Filled';

export default IconMaterialWifiProxyW100Filled;
