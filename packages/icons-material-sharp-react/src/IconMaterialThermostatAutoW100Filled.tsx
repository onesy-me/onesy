import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermostatAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatAutoW100Filled'

      short_name='ThermostatAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m542-440 142-360h14l144 360h-32l-44-108H616l-44 108h-30Zm84-134h130l-64-164h-4l-62 164ZM328-172q-62 0-105-43t-43-105q0-40 21-75t59-57v-268q0-29 19.5-48.5T328-788q29 0 48.5 19.5T396-720v268q38 22 59 57t21 75q0 62-43 105t-105 43ZM208-320h240q0-30-17-58.5T382-430l-14-10v-280q0-17-11.5-28.5T328-760q-17 0-28.5 11.5T288-720v280l-14 10q-32 23-49 51.5T208-320Z"/>
    </Icon>
  );
});

IconMaterialThermostatAutoW100Filled.displayName = 'OnesyIconMaterialThermostatAutoW100Filled';

export default IconMaterialThermostatAutoW100Filled;
