import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifi2Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2Bar'

      short_name='Wifi2Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm0-320q-51 0-97 15t-84 41q-20 14-45 13t-42-18q-17-18-17-42.5t20-39.5q55-42 122.5-65.5T480-560q75 0 142.5 24T745-470q20 15 20.5 39.5T748-388q-17 17-42 17.5T661-384q-38-26-84-41t-97-15Z"/>
    </Icon>
  );
});

IconMaterialWifi2Bar.displayName = 'OnesyIconMaterialWifi2Bar';

export default IconMaterialWifi2Bar;
