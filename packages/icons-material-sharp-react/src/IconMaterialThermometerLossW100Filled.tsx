import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermometerLossW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerLossW100Filled'

      short_name='ThermometerLoss'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M824-666H556v-28h268v28ZM360-172q-62 0-105-43t-43-105q0-42 22-76.5t58-55.5v-268q0-29 19.5-48.5T360-788q29 0 48.5 19.5T428-720v268q36 21 57.5 55.5T508-320q-1 62-44 105t-104 43Zm-40-388h80v-160q0-17-11.5-28.5T360-760q-17 0-28.5 11.5T320-720v160Z"/>
    </Icon>
  );
});

IconMaterialThermometerLossW100Filled.displayName = 'OnesyIconMaterialThermometerLossW100Filled';

export default IconMaterialThermometerLossW100Filled;
