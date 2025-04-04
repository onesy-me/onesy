import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplaneTicketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketFilled'

      short_name='AirplaneTicket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-240q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-240h800v640H80Zm274-174 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketFilled.displayName = 'OnesyIconMaterialAirplaneTicketFilled';

export default IconMaterialAirplaneTicketFilled;
