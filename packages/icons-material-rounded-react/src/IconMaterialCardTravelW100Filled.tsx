import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardTravelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelW100Filled'

      short_name='CardTravel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-668v-60q0-25 17.5-42.5T392-788h176q25 0 42.5 17.5T628-728v60h140q25 0 42.5 17.5T828-608v376q0 25-17.5 42.5T768-172H192q-25 0-42.5-17.5T132-232v-376q0-25 17.5-42.5T192-668h140Zm28 0h240v-60q0-14-9-23t-23-9H392q-14 0-23 9t-9 23v60ZM160-302h640v-76H160v76Z"/>
    </Icon>
  );
});

IconMaterialCardTravelW100Filled.displayName = 'OnesyIconMaterialCardTravelW100Filled';

export default IconMaterialCardTravelW100Filled;
