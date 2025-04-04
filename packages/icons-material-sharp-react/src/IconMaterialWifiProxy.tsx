import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiProxy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxy'

      short_name='WifiProxy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-180h50v-50h-50v50Zm0-110h50v-50h-50v50Zm110 110h50v-50h-50v50Zm-170 60v-280h170v110h110v170H640Zm-160 0L0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600L822-463q-14-14-28-28.5T766-520l78-78q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 40-40 28.5 28.5L577-217l-97 97Zm0-357Z"/>
    </Icon>
  );
});

IconMaterialWifiProxy.displayName = 'OnesyIconMaterialWifiProxy';

export default IconMaterialWifiProxy;
