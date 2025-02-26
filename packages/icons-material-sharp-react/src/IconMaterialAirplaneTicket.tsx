import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplaneTicket = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicket'

      short_name='AirplaneTicket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-240q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-240h800v640H80Zm80-80h640v-480H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm194-94 356-94q15-4 22.5-18.5T736-476q-4-15-17.5-22.5T690-502l-98 26-160-150-56 14 96 168-96 24-50-38-38 10 66 114Zm126-146Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicket.displayName = 'OnesyIconMaterialAirplaneTicket';

export default IconMaterialAirplaneTicket;
