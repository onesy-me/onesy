import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeatherSnowyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherSnowyW100Filled'

      short_name='WeatherSnowy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-222q-11 0-19.5-8.5T232-250q0-11 8.5-19.5T260-278q11 0 19.5 8.5T288-250q0 11-8.5 19.5T260-222Zm120 120q-11 0-19.5-8.5T352-130q0-11 8.5-19.5T380-158q11 0 19.5 8.5T408-130q0 11-8.5 19.5T380-102Zm120-120q-11 0-19.5-8.5T472-250q0-11 8.5-19.5T500-278q11 0 19.5 8.5T528-250q0 11-8.5 19.5T500-222Zm240 0q-11 0-19.5-8.5T712-250q0-11 8.5-19.5T740-278q11 0 19.5 8.5T768-250q0 11-8.5 19.5T740-222ZM620-102q-11 0-19.5-8.5T592-130q0-11 8.5-19.5T620-158q11 0 19.5 8.5T648-130q0 11-8.5 19.5T620-102ZM300-386q-81 0-137.5-56.5T106-580q0-76 51.5-131T287-774q29-56 79.5-88T480-894q85 0 145.5 57T695-695q75 4 117 49.5T854-540q0 64-45 109t-109 45H300Z"/>
    </Icon>
  );
});

IconMaterialWeatherSnowyW100Filled.displayName = 'OnesyIconMaterialWeatherSnowyW100Filled';

export default IconMaterialWeatherSnowyW100Filled;
