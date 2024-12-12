import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiProxyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxyFilled'

      short_name='WifiProxy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600l-99 99q-23-11-48.5-16.5T761-523q-101 0-172 71t-71 172q0 26 5.5 51.5T540-180l-60 60Zm160 0v-280h170v110h110v170H640Zm60-170h50v-50h-50v50Zm0 110h50v-50h-50v50Zm110 0h50v-50h-50v50Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyFilled.displayName = 'OnesyIconMaterialWifiProxyFilled';

export default IconMaterialWifiProxyFilled;
