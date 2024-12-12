import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifi0BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi0BarFilled'

      short_name='SignalWifi0Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600L480-120Zm0-114 364-364q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi0BarFilled.displayName = 'OnesyIconMaterialSignalWifi0BarFilled';

export default IconMaterialSignalWifi0BarFilled;
