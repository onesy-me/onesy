import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplaneTicketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketW100'

      short_name='AirplaneTicket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-146q36-17 58-49.5t22-72.5q0-40-22-72.5T132-602v-146h696v536H132Zm28-28h640v-480H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm198-106 346-92q13-3 21-13.5t5-22.5q-3-12-14.5-16.5T692-492l-102 28-160-150-38 8 96 168-114 28-50-38-20 6 54 96Zm122-134Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketW100.displayName = 'OnesyIconMaterialAirplaneTicketW100';

export default IconMaterialAirplaneTicketW100;
