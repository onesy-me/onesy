import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiW100'

      short_name='Wifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m254-346-28-28q50.78-51.34 116.31-78.67T479.92-480q72.08 0 137.58 27.5Q683-425 734-374l-28 28q-45-45-103.5-69.5T480-440q-64 0-122.5 24.5T254-346ZM84-516l-28-28q85-85 194.68-130.5Q360.37-720 480.18-720 600-720 709.5-674.5T904-544l-28 28q-79-79-181.5-121.5T480-680q-112 0-214.5 42.5T84-516Zm396 396-85-85q16.86-16.9 38.84-25.95 21.98-9.05 46.07-9.05t46.13 9.05Q548.09-221.9 565-205l-85 85Z"/>
    </Icon>
  );
});

IconMaterialWifiW100.displayName = 'OnesyIconMaterialWifiW100';

export default IconMaterialWifiW100;
