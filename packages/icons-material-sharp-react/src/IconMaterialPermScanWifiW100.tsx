import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermScanWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiW100'

      short_name='PermScanWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-194 74-600q85-73 189.5-110.5T480-748q112 0 216.5 37.5T886-600L480-194Zm0-40 364-364q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364Zm-14-126h28v-200h-28v200Zm14-250q8.5 0 14.25-5.75T500-630q0-8.5-5.75-14.25T480-650q-8.5 0-14.25 5.75T460-630q0 8.5 5.75 14.25T480-610Zm0 376Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiW100.displayName = 'OnesyIconMaterialPermScanWifiW100';

export default IconMaterialPermScanWifiW100;
