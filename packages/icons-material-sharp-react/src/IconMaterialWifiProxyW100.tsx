import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiProxyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxyW100'

      short_name='WifiProxy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M664-225h77v-77h-77v77Zm0-105h77v-77h-77v77Zm105 105h77v-77h-77v77Zm-133 28v-238h133v105h105v133H636Zm-156 3L74-600q85-73 189.5-110.5T480-748q112 0 216.5 37.5T886-600l-77 77q-5-4.91-10-10t-10-10l55-55q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 65-65 10 10 10 10-85 85Zm0-283Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyW100.displayName = 'OnesyIconMaterialWifiProxyW100';

export default IconMaterialWifiProxyW100;
