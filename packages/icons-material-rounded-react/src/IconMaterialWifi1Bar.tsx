import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifi1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1Bar'

      short_name='Wifi1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/>
    </Icon>
  );
});

IconMaterialWifi1Bar.displayName = 'OnesyIconMaterialWifi1Bar';

export default IconMaterialWifi1Bar;
