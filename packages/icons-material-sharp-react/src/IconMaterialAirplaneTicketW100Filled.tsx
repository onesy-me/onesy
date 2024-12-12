import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplaneTicketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketW100Filled'

      short_name='AirplaneTicket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-146q36-17 58-49.5t22-72.5q0-40-22-72.5T132-602v-146h696v536H132Zm226-134 346-92q13-3 21-13.5t5-22.5q-3-12-14.5-16.5T692-492l-102 28-160-150-38 8 96 168-114 28-50-38-20 6 54 96Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketW100Filled.displayName = 'OnesyIconMaterialAirplaneTicketW100Filled';

export default IconMaterialAirplaneTicketW100Filled;
