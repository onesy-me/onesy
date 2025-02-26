import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifi2BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2BarW100'

      short_name='Wifi2Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-150q-21 0-35.5-14.5T430-200q0-21 14.5-35.5T480-250q21 0 35.5 14.5T530-200q0 21-14.5 35.5T480-150Zm-.06-290Q420-440 366-419t-96 58q-7 6-15.5 6.5t-14.5-5.33q-6-6.17-5.5-14.67T242-389q48-43 108.5-67T480-480q69 0 129.5 24T718-389q7 6 7.5 14.41T720-360q-6 6-14.5 5.5T690-361q-42-37-96.06-58t-114-21Z"/>
    </Icon>
  );
});

IconMaterialWifi2BarW100.displayName = 'OnesyIconMaterialWifi2BarW100';

export default IconMaterialWifi2BarW100;
