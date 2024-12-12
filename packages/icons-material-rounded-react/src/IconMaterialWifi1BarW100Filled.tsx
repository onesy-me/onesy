import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifi1BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1BarW100Filled'

      short_name='Wifi1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-150q-21 0-35.5-14.5T430-200q0-21 14.5-35.5T480-250q21 0 35.5 14.5T530-200q0 21-14.5 35.5T480-150Z"/>
    </Icon>
  );
});

IconMaterialWifi1BarW100Filled.displayName = 'OnesyIconMaterialWifi1BarW100Filled';

export default IconMaterialWifi1BarW100Filled;
