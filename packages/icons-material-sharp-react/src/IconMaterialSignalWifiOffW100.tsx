import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifiOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiOffW100'

      short_name='SignalWifiOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-394-20-20 184-184q-79-60-172-91t-192-31q-29 0-58 3t-58 8l-24-24q35-8 70-11.5t70-3.5q112 0 216.5 37.5T886-600L680-394ZM480-234l103-103-336-336q-35 14-67.5 33T116-598l364 364Zm329 123L603-317 480-194 74-600q35-29 72.5-53t78.5-42L110-810l20-20 699 699-20 20ZM512-562Zm-97 57Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiOffW100.displayName = 'OnesyIconMaterialSignalWifiOffW100';

export default IconMaterialSignalWifiOffW100;
