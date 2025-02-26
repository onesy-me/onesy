import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifi4Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4Bar'

      short_name='SignalWifi4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600L480-120Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4Bar.displayName = 'OnesyIconMaterialSignalWifi4Bar';

export default IconMaterialSignalWifi4Bar;
