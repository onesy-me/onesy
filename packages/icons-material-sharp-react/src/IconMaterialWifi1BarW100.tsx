import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifi1BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1BarW100'

      short_name='Wifi1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-120-85-85q16.86-16.9 38.84-25.95 21.98-9.05 46.07-9.05t46.13 9.05Q548.09-221.9 565-205l-85 85Z"/>
    </Icon>
  );
});

IconMaterialWifi1BarW100.displayName = 'OnesyIconMaterialWifi1BarW100';

export default IconMaterialWifi1BarW100;
