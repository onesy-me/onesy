import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineStops = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStops'

      short_name='AirlineStops'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M18.21,9.21C15.93,10.78,13.45,13.3,13,17h2v2H9v-2h2c-0.5-4.5-4.37-8-9-8V7c4.39,0,8.22,2.55,10,6.3 c1.13-2.43,2.99-4.25,4.78-5.52L14,5h7v7L18.21,9.21z"/>
    </Icon>
  );
});

IconMaterialAirlineStops.displayName = 'OnesyIconMaterialAirlineStops';

export default IconMaterialAirlineStops;
