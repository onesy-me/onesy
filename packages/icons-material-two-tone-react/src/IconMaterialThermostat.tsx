import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermostat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Thermostat'

      short_name='Thermostat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/>
    </Icon>
  );
});

IconMaterialThermostat.displayName = 'OnesyIconMaterialThermostat';

export default IconMaterialThermostat;
