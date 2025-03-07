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
      <path d="m488-438-114 28-46-35q-1-1-9-2l-3 1q-5 2-6.5 6t.5 9l42 75q2 5 7 7t10 0l335-89q13-3 21-13.5t5-22.5q-3-12-14.5-16.5T692-492l-102 28-153-143q-3-3-7-4.5t-9-.5l-4 1q-9 2-13 10.5t1 16.5l83 146ZM192-212q-25 0-42.5-17.5T132-272v-69q0-8 3.5-15t10.5-11q30-19 48-48t18-65q0-36-18-65t-48-48q-7-4-10.5-11t-3.5-15v-69q0-25 17.5-42.5T192-748h576q25 0 42.5 17.5T828-688v416q0 25-17.5 42.5T768-212H192Zm0-28h576q14 0 23-9t9-23v-416q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v70q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v70q0 14 9 23t23 9Zm288-240Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketW100.displayName = 'OnesyIconMaterialAirplaneTicketW100';

export default IconMaterialAirplaneTicketW100;
