import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermostatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatW100Filled'

      short_name='Thermostat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M486-546q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h164q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H486Zm0-148q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h284q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H486ZM328-172q-62 0-105-43t-43-105q0-40.31 21-75.15Q222-430 260-452v-268q0-29 19.5-48.5T328-788q29 0 48.5 19.5T396-720v268q38 22 59 56.85 21 34.84 21 75.15 0 62-43 105t-105 43ZM208-320h240q0-30-17-58.5T382-430l-14-10v-280q0-17-11.5-28.5T328-760q-17 0-28.5 11.5T288-720v280l-14 10q-32 23-49 51.5T208-320Z"/>
    </Icon>
  );
});

IconMaterialThermostatW100Filled.displayName = 'OnesyIconMaterialThermostatW100Filled';

export default IconMaterialThermostatW100Filled;
