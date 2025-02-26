import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifi4BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4BarW100Filled'

      short_name='SignalWifi4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-194 74-600q85-73 189.5-110.5T480-748q112 0 216.5 37.5T886-600L480-194Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarW100Filled.displayName = 'OnesyIconMaterialSignalWifi4BarW100Filled';

export default IconMaterialSignalWifi4BarW100Filled;
