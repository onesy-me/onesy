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
      <path d="m616-548-40 99q-2 4-5 6.5t-8 2.5q-8 0-12-6t-1-13l132-337q1-2 2.5-3t3.5-1h6q2 0 3.5 1t2.5 3l134 336q3 8-1.5 14t-12.5 6q-5 0-8.5-2t-5.5-7l-40-99H616Zm10-26h130l-64-164h-4l-62 164ZM328-172q-62 0-105-43t-43-105q0-40 21-75t59-57v-268q0-29 19.5-48.5T328-788q29 0 48.5 19.5T396-720v268q38 22 59 57t21 75q0 62-43 105t-105 43ZM208-320h240q0-30-17-58.5T382-430l-14-10v-280q0-17-11.5-28.5T328-760q-17 0-28.5 11.5T288-720v280l-14 10q-32 23-49 51.5T208-320Z"/>
    </Icon>
  );
});

IconMaterialThermostatAutoW100Filled.displayName = 'OnesyIconMaterialThermostatAutoW100Filled';

export default IconMaterialThermostatAutoW100Filled;
