import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsW100'

      short_name='Sensors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M234-234q-48-48-75-111t-27-135q0-72 27-135t75-111l20 20q-44 44-69 102t-25 124q0 67 25 125t69 101l-20 20Zm113-113q-26-26-40.5-60T292-480q0-39 14.5-73t40.5-60l20 20q-22 22-34.5 51T320-480q0 33 12.5 62t34.5 51l-20 20Zm133-105q-11 0-19.5-8.5T452-480q0-11 8.5-19.5T480-508q11 0 19.5 8.5T508-480q0 11-8.5 19.5T480-452Zm133 105-20-20q22-22 34.5-51t12.5-62q0-33-12.5-62T593-593l20-20q26 26 40.5 60t14.5 73q0 39-14.5 73T613-347Zm113 113-20-20q44-44 69-102t25-124q0-66-25-124t-69-102l20-20q48 48 75 111t27 135q0 72-27 135t-75 111Z"/>
    </Icon>
  );
});

IconMaterialSensorsW100.displayName = 'OnesyIconMaterialSensorsW100';

export default IconMaterialSensorsW100;
