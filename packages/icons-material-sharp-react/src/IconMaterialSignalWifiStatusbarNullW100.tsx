import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifiStatusbarNullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiStatusbarNullW100'

      short_name='SignalWifiStatusbarNull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-194 74-600q85-73 189.5-110.5T480-748q112 0 216.5 37.5T886-600L480-194Zm0-40 364-364q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiStatusbarNullW100.displayName = 'OnesyIconMaterialSignalWifiStatusbarNullW100';

export default IconMaterialSignalWifiStatusbarNullW100;
